import React, { Component } from 'react';
import headerLogo from '../../assets/ys-logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header"> 
        <div className="header__container custom-container">
          <img src={headerLogo} alt="yemek sepeti logo" />
        </div> 
      </div>
    );
  }
}
