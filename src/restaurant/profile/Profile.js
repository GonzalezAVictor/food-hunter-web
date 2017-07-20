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

  > p {
    font-size: 15px;
  }

  > h1 {
    display: inline-block;
    width: inherit;
  }

  > h6 {
    font-size: 15px;
    color: gray;
    display: inline-block;
  }

  > img {
    width: 240px;
    height: 240px;
    float: middle;
  }
`
const Label = styled.div`
  background-color: gray;
  width: ${ props => props.width ? props.width : '50%;' };
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
      console.log('restaurant: ', this.state.restaurant);
    }
    Api.getRestaurantData(cb);
  }

  render() {
    let { restaurant } = this.state;
    return (
      <ProfileContainer>
        <Container>
          <BlockContainer>
            <BlockContainer>
              <img alt="" src=''/>
            </BlockContainer>
            <BlockContainer>
              <p>Times visited: {restaurant.times_visited}</p> <br/>
              <p>Times random: {restaurant.times_random}</p> <br/>
              <p>Categories : // imprimir las categorias como algo </p>
            </BlockContainer>
          </BlockContainer>
          <BlockContainer>
            Estadisticas de las promociones
          </BlockContainer>
        </Container>
        <Container>
          <BlockContainer>
            <h1>{restaurant.name}</h1> <h6>({restaurant.openAt} - {restaurant.closeAt})</h6>
            <p>Email: {restaurant.email}</p>
            Description: <br/>
            {restaurant.description}
          </BlockContainer>
        </Container>
      </ProfileContainer>
    );
  }
}
