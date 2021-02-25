import React, { Component } from "react";

export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  
  deleteOrder(id) {
    this.props.deleteOrder(id);
  }

  formatPrice(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  updateBasket(e, id) {
    let quantity = e.target.value.trim();
    this.props.updateBasket(id, quantity);
  }
  
  render() {
    let totalPrice = 0;
    for (let i=0; i < this.props.orders.length; i++) {
      totalPrice += this.props.orders[i].price * this.props.orders[i].quantity;
    } 
    return (
      <div className="basket custom-container">
        <div className="basket__header flex">
          <span>YEMEK SEPETİM</span>
        </div>
        <div className="basket__address flex">
          <span>Şişli (Esentepe Mah. - Plazalar.)</span>
        </div>
        <div className="basket__content">
          {this.props.orders.length ? (
            this.props.orders.map((data) => {
              return (
                <div className="basket__content--item"  key={data.id}>
                  <div className="basket-items">
                    <div className="left-side">
                      <div className="left-side__food-detail">
                        <span className="left-side__food-detail__title" name="name"> {data.itemName} </span>
                      </div>
                    </div>
                    <div className="right-side">
                    <div className="left-side__piece">
                      <input name="quantity" type="number" onChange={(e) => this.updateBasket(e, data.id)} value={data.quantity}  />
                    </div>
                      <span>{this.formatPrice(data.quantity * data.price) } TL</span>
                      <button onClick={() => this.deleteOrder(data.id)}><i className="fas fa-times"></i></button> 
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="basket__content--null">
              <i className="fas fa-shopping-basket"></i>
              <span>Sepetiniz Henüz Boş</span>
            </div>
          )}
          {this.props.orders.length ?
            <div className="total-price">
              <span>Toplam</span>
              <span>{this.formatPrice(totalPrice)} TL</span>
            </div> : null
          }
        </div>
      </div>
    );
  }
}
