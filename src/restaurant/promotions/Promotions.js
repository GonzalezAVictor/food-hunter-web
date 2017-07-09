import React from 'react';
import PromotionsList from './PromotionsList';
import PromotionsNavBar from './PromotionsNavBar';
import Api from './../../api/Api';
import PromotionItem from './PromotionItem';

import styled from 'styled-components';
import promotionsComponentsStyled from './PromotionsComponentsStyled';

const PromotionsContainer = promotionsComponentsStyled.PromotionViewContainer;

const PromotionsListContainer = styled.div`
  padding: 10px 5%;
`

export default class Promotions extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTagView: 'promotionsList',
      promotions: []
    }
    this.fetchPromotions = this.fetchPromotions.bind(this);
    this.deletePromotion = this.deletePromotion.bind(this);
    this.createPromotionsList = this.createPromotionsList.bind(this);
  }

  componentWillMount() {
    this.fetchPromotions();
  }

  fetchPromotions() {
    let cb = (promotions) => {
      this.setState({
        promotions: promotions
      });
      this.createPromotionsList();
    }
    Api.getPromotions(cb);
  }

  activePromotion(id) {
    Api.activePromotion(id);
  }

  deletePromotion(id) {
    console.log('delete: ', id);
    Api.deletePromotion(id);
    this.fetchPromotions();
  }

  createPromotionsList() {
    return this.state.promotions.map((promotion, i) => {
      console.log(promotion);
      return (
        <PromotionItem
          key={i}
          promotion={promotion}
          activePromotion={this.activePromotion}
          deletePromotion={this.deletePromotion}
        />)
    });
  }

  render() {
    let { currentTagView } = this.state;
    return (
      <PromotionsContainer>
        <PromotionsListContainer>
          {this.createPromotionsList()}
        </PromotionsListContainer>
      </PromotionsContainer>
    );
  }
}
