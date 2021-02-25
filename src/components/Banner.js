import React, { Component } from "react";
import companyLogo from '../../assets/cafe-logo.png';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__info">
          <div>
            <img src={companyLogo} alt="CAFE" />
          </div>
          <div className="banner__info__cafe">
            <div className="banner__info__cafe--name">
              <span>
                {this.props.cafeInfo.d.ResultSet.DisplayName}
              </span>
            </div>
            <div className="banner__info__cafe--info">
              <div className="icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="rating">
                  <span className="rating__title">Hız</span>
                  <span className="rating__score"> {this.props.cafeInfo.d.ResultSet.Speed}</span>
              </div>
              <div className="rating">
                  <span className="rating__title">Servis</span>
                  <span className="rating__score"> {this.props.cafeInfo.d.ResultSet.Serving}</span>
              </div>
              <div className="rating">
                  <span className="rating__title">Lezzet</span>
                  <span className="rating__score">{this.props.cafeInfo.d.ResultSet.Flavour}</span>
              </div>
              <div className="order-info">
                  <i className="fas fa-money-bill-wave"></i>
                  <span className="order-info__title" >Min Tutar</span>
                  <span className="order-info__text"> {this.props.cafeInfo.d.ResultSet.DeliveryFee} TL</span>
               </div>
              <div className="order-info">
                  <i className="fas fa-motorcycle"></i>
                  <span className="order-info__title">Servis Süresi</span>
                  <span className="order-info__text">  {this.props.cafeInfo.d.ResultSet.DeliveryTime} dk.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__link-area">
          <a className="banner__link-area__item" href="#">İstanbul Yemek Siparişi</a>
          <a className="banner__link-area__item" href="#">Burger</a>
        </div>
      </div>
    );
  }
}
