import React from 'react';
import styled from 'styled-components';
import Api from './../../api/Api';

const ProfileContainer = styled.div`
  // background-color: blue;
`
const Container = styled.div`
  display: block;
`
const BlockContainer = styled.div`
  display: inline-block;
  width: ${ props => props.width ? props.width : '50%;' };
  padding: 5px;
  vertical-align: top;

  > img {
    width: 240px;
    height: 240px;
    float: right;
  }
`
const Label = styled.div`
  background-color: gray;
  width: ${ props => props.width ? props.width : '50%;' };
  border-radius: 8px;
`

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
  }

  componentWillMount() {
    let cb = (restaurant) => {
      this.setState({ restaurant: restaurant });
    }
    Api.getRestaurantData(cb);
  }

  render() {
    return (
      <ProfileContainer>
        <Container>
          <BlockContainer>
            <img alt="" src=''/>
          </BlockContainer>
          <BlockContainer>
            Times visited <br/>
            Times random
          </BlockContainer>
        </Container>
        <Container>
          <BlockContainer>
            <Label>Name</Label>
            <Label>Open at - Close at</Label>
            <Label>Email</Label>
          </BlockContainer>
          <BlockContainer>
            Descripton
          </BlockContainer>
          <Container>
            Categories
          </Container>
          <Container>
            Estadsticas de las promociones
          </Container>
        </Container>
      </ProfileContainer>
    );
  }
}
