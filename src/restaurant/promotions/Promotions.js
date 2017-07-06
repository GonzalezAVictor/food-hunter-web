import React from 'react';

export default class Promotions extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Promotions
      </div>
    );
  }
}
