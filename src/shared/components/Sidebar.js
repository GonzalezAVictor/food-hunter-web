import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR } from './../../utils/constants';

import styled from 'styled-components';

const SidebarNav = styled.ul`
  background-color: ${COLOR.DARKBLUE};
  height: 100vh;
  width: 15%;
  display: inline-block;

  > li {
    margin: 20px 10px;
    font-size: 15px;
  }
`
 
export default class Sidebar extends React.Component { 
  static propTypes = { 
  }; 
 
  constructor(props) { 
    super(props); 
  } 
 
  render() { 
    return ( 
      <SidebarNav>
        <li><Link to='/restaurant/dashboard'>Restaurant</Link></li>
        <li><Link to='/restaurant/promotions'>Promotions</Link></li>
        <li><Link to='/restaurant/profile'>Profile</Link></li>
        <li><Link to='/restaurant/calendar'>Calendar</Link></li>
        <li><Link to='/restaurant/stats'>Stats</Link></li>
      </SidebarNav> 
    ); 
  } 
} 