import React from 'react';
import styled from 'styled-components';

export default class Dashboard extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>HOOOOME</div>
    );
  }
}
