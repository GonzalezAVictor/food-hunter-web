import React from 'react';

export default class Calendar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Calendar</div>
    );
  }
}