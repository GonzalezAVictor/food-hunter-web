import React from 'react';
import styled from 'styled-components';
import Api from './../../api/Api';
import { Input, Radio, Button, Select } from 'antd';
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const Option = Select.Option;

const Form = styled.div`
  padding: 15px;
  width: 650px;
  margin: auto;
  margin-top: 70px;
`

const BlockContainer = styled.div`
  display: inline-block;
  width: ${ props => props.width ? props.width : '50%;' };
  padding: 5px;
  vertical-align: top;

  > button {
    float: right;
  }
`

const Container = styled.div`
 display: block;
`

export default class PromotionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categorySelected: null,
      name: '',
      details: '',
      promotion_type: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitPromotion = this.submitPromotion.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  componentWillMount() {
    let cb = (restaurant) => {
      restaurant.categories.map((category, i) => {
        let categoryObject = { name: category.name, id: category.id };
        let newCategoryState = this.state.categories.slice();
        newCategoryState.push(categoryObject);
        this.setState({ categories: newCategoryState });
      })
    }
    Api.getRestaurantData(cb);
  }

  onChange = (e) => {
    this.setState({
      promotion_type: e.target.value,
    });
  }

  submitPromotion() {
    let { state } = this;
    let promotion = {
      name: state.name,
      details: state.details,
      promotion_type: state.promotion_type,
      category_id: state.categorySelected
    }
    Api.createPromotion(promotion);
    console.log('promotion: ', promotion);
  }

  handleChange(value) {
    this.setState({ categorySelected: value });
  }

  handleName(e) {
    let inputValue = e.target.value;
    this.setState({ name: inputValue })
  }

  handleDetails(e) {
    let inputValue = e.target.value;
    this.setState({ details: inputValue })
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <Form>
        <Container>
          <BlockContainer width={'35%;'} >
            <Input placeholder="Name" maxLength={25} onChange={this.handleName} />
            <RadioGroup onChange={this.onChange} value={this.state.promotion_type}>
              Promotion type:
              <Radio style={radioStyle} value={'flash'}>Flash</Radio>
              <Radio style={radioStyle} value={'premium'}>Premium</Radio>
            </RadioGroup>
          </BlockContainer>
          <BlockContainer width={'65%;'} >
            <TextArea placeholder="Details" rows={5} maxLength={100} onChange={this.handleDetails} />
          </BlockContainer>
        </Container>
        <Container>
          <BlockContainer width={'35%;'} >
            <Select
              showSearch
              style={{ width: 210 }}
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={this.handleChange}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {this.state.categories.map((category, i) => {
                return <Option key={i} value={category.id}>{category.name}</Option>
              })}
            </Select>
          </BlockContainer>
          <BlockContainer width={'65%;'} >
            <Button type="primary" onClick={this.submitPromotion} >Create promotion</Button>
          </BlockContainer>
        </Container>
      </Form>
    );
  }
}
