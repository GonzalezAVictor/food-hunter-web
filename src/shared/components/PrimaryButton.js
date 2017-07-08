import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.div`
  background-color: lightblue;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  margin: 10px;
  color: black;
`

export default class PrimaryButton extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { text, linkTo } = this.props;
    return (
      <Link to={linkTo}>
        <Button>
          { text }
        </Button>
      </Link>
    );
  }
}
