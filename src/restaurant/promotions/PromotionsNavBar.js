import React from 'react';
import PrimaryButton from './../../shared/components/PrimaryButton';

import PromotionsComponentStyled from './PromotionsComponentsStyled';

export default class PromotionsNavBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PrimaryButton text='Promotions list' linkTo='/restaurant/promotions/list' />
        <PrimaryButton text='Create new promotion' linkTo='/restaurant/promotions/create' />
      </div>
    );
  }
}
