import React from 'react';
import PromotionItem from './PromotionItem';

import styled from 'styled-components';

const PromotionsListContainer = styled.div`
  padding: 10px 5%;
`

export default class PromotionsList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PromotionsListContainer>
        <PromotionItem />
        <PromotionItem />
        <PromotionItem />
        <PromotionItem />
      </PromotionsListContainer>
    );
  }
}
