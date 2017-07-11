import React from 'react';
import { Icon, Switch, Modal } from 'antd';
import { COLOR } from './../../utils/constants';

import styled from 'styled-components';

const ItemContainer = styled.div`
  background-color: ${COLOR.LIGHTGRAY};
  margin: 5px 0px;
  border-radius: 8px;
  padding: 5px 10px;
`

const PromotionName = styled.p`
  display: inline-block;
  font-size: 15px;
`

const Actions = styled.div`
  width: 125px;
  display: inline-block;
  float: right;

  > a  > i {
    font-size: 15px;
    margin: 3px 4px;
  }
`

export default class PromotionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDeleteVisible: false,
      modalActiveVisible: false,
      promotionActive: false
    }
    this.activePromotion = this.activePromotion.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    let isActive = this.props.promotion.active === 1 ? true : false;
    this.setState({ promotionActive: isActive });
  }

  activePromotion() {
    this.setState({ 
      modalActiveVisible: true,
      promotionActive: true
       });
  }

  handleDelete() {
    this.setState({ modalDeleteVisible: true });
  }

  handledeleteOk = (e) => {
    this.setState({
      modalDeleteVisible: false,
    });
    this.props.deletePromotion(this.props.promotion.id);
  }

  handleActiveOk = (e) => {
    let { promotion } = this.props;
    this.setState({
      modalActiveVisible: false,
    });
    this.props.activePromotion(promotion.id);
  }

  handleDeleteCancel = (e) => {
    this.setState({
      modalDeleteVisible: false,
    });
  }

  handleActiveCancel = (e) => {
    this.setState({
      modalActiveVisible: false,
      promotionActive: false
    });
  }

  render() {
    let { promotion } = this.props;
    return (
      <ItemContainer>
        <PromotionName>
          { promotion.name }
        </PromotionName>
        <Actions>
          <a onClick={this.handleEdit} ><Icon type="edit" /></a>
          <a onClick={this.handleDelete} ><Icon type="delete" /></a>
          Active: <Switch 
          onChange={this.activePromotion}
          size="small"
          checked={ this.state.promotionActive }
          disabled={ this.state.promotionActive }
          checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
        </Actions>
        <Modal
          title="Basic Modal"
          visible={this.state.modalDeleteVisible}
          onOk={this.handledeleteOk}
          onCancel={this.handleDeleteCancel}
        >
          <p>This accion will delete the promotion {promotion.name} permanently.</p>
          <p>Are you sure you want to continue?</p>
        </Modal>


        <Modal
          title="Actie promotion"
          visible={this.state.modalActiveVisible}
          onOk={this.handleActiveOk}
          onCancel={this.handleActiveCancel}
        >
          <p>This action will active the promotion { promotion.name } and is not revertible.</p>
          <p>Are you sure you want to continue?</p>
        </Modal>
      </ItemContainer>
    );
  }
}
