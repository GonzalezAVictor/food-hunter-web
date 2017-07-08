import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  background-color: red;
  padding: 30px;
  width: 50%;
`

export default class PromotionForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>PromotionForm</Form>
    );
  }
}
