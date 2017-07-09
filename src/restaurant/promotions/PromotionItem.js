import React from 'react';
import { Icon, Switch } from 'antd';
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
    this.activePromotion = this.activePromotion.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  activePromotion() {
    let { promotion } = this.props;
    this.props.activePromotion(promotion.id);
  }

  handleDelete() {
    this.props.deletePromotion(this.props.promotion.id);
  }

  render() {
    let { promotion } = this.props;
    let promotionActive = promotion.active === 1 ? true : false;
    return (
      <ItemContainer>
        <PromotionName>
          { promotion.name }
        </PromotionName>
        <Actions>
          <a onClick={this.handleEdit} ><Icon type="edit" /></a>
          <a onClick={this.handleDelete} ><Icon type="delete" /></a>
          Active: <Switch defaultChecked={ promotionActive }
          onChange={this.activePromotion}
          size="small"
          disabled={ promotionActive }
          checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
        </Actions>
      </ItemContainer>
    );
  }
}
