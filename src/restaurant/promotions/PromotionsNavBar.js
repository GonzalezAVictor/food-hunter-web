import React from 'react';
import PrimaryButtonLink from './../../shared/components/PrimaryButtonLink';

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
        <PrimaryButtonLink text='Promotions list' linkTo='/restaurant/promotions/list' />
        <PrimaryButtonLink text='Create new promotion' linkTo='/restaurant/promotions/create' />
      </div>
    );
  }
}
