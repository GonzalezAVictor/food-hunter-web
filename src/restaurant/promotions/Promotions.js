import React from 'react';
import PromotionsList from './PromotionsList';
import PromotionsNavBar from './PromotionsNavBar';
import Api from './../../api/Api';

import styled from 'styled-components';
import promotionsComponentsStyled from './PromotionsComponentsStyled';

const PromotionsContainer = promotionsComponentsStyled.PromotionViewContainer;

export default class Promotions extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTagView: 'promotionsList'
    }
  }

  componentWillMount() {
    console.log('Mounteando');
    Api.getPromotions();
  }

  render() {
    let { currentTagView } = this.state;
    return (
      <PromotionsContainer>
        <PromotionsList />
      </PromotionsContainer>
    );
  }
}
