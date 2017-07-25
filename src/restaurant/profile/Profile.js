import React from 'react';
import styled from 'styled-components';
import Api from './../../api/Api';
import PromotionsTable from './../../shared/components/PromotionsTable';

const ProfileContainer = styled.div`
  // background-color: blue;
`
const Container = styled.div`
  display: block;
`
const BlockContainer = styled.div`
  display: inline-block;
  width: ${ props => props.width ? props.width : '50%;' };
  padding: 5px;
  vertical-align: top;

  p {
    font-size: 15px;
  }

  > h1 {
    display: inline-block;
    width: inherit;
  }
`
const Label = styled.div`
  background-color: gray;
  width: ${ props => props.width ? props.width : '50%;' };
`
const CenterTextContainer = styled.div`
  text-align: center;

  > h6 {
    font-size: 15px;
    color: gray;
    display: inline-block;
  }

  > img {
    width: 240px;
    height: 240px;
    float: middle;
  }
`
const CategoryLabel = styled.div`
  background-color: blue;
  font-size: 15px;
  width: 150px;
  margin: auto;
  margin-bottom: 5px;
`

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
    this.createCategories = this.createCategories.bind(this);
  }

  componentWillMount() {
    let cb = (restaurant) => {
      this.setState({ restaurant: restaurant });
      console.log('restaurant: ', this.state.restaurant);
    }
    Api.getRestaurantData(cb);
  }

  createCategories() {
    if (this.state.restaurant.categories !== undefined) {
      return this.state.restaurant.categories.map((category, i) => {
        return <CategoryLabel key={i}>
          { category.name }
        </CategoryLabel>
      });
    }
  }

  render() {
    let { restaurant } = this.state;
    return (
      <ProfileContainer>

        <BlockContainer>
        <CenterTextContainer>
          <img alt="" src=''/>
        </CenterTextContainer>
          <Container>
            <CenterTextContainer>
              <h1>{restaurant.name}</h1>
              <h6>({restaurant.openAt} - {restaurant.closeAt})</h6>
              <br/>
              <br/>
              <p>Times visited: {restaurant.times_visited}</p>
              <p>Times random: {restaurant.times_random}</p> <br/>
              { this.createCategories() }
              Description: <br/>
              <p>{ restaurant.description }</p> <br/>
              Ubication: <br/>
              { restaurant.ubication }
            </CenterTextContainer>
          </Container>
        </BlockContainer>
        <BlockContainer>
          Promotions: 
          <PromotionsTable promotions={restaurant.promotions} />
        </BlockContainer>
      </ProfileContainer>
    );
  }
}
