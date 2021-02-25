import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }

  onFormSubmit(e) {
    e.preventDefault();
    const itemName = e.target.elements.itemName.value.trim();
    const price = parseFloat(e.target.elements.price.value.trim().replace(',', '.'));
    const id = e.target.elements.id.value.trim();
    let quantity = e.target.elements.quantity.value.trim();
    
    quantity == '' ?  quantity = 1 : null
    
    const orders = {
      itemName,
      price, 
      quantity : parseInt(quantity),
      id
    }
    this.props.addOrder(orders, price);
  }
    
  render() {
    return (
      <>
        {this.props.menuItems.map((data) => {
          return (
            <form onSubmit={this.onFormSubmit} key={data.ProductId}>
              <div className="menu__item" >
                <div className="left-side">
                  <div className="left-side__piece">
                    <input name="quantity" type="number" placeholder="1" />
                    <button type="submit">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="left-side__food-detail">
                    <span className="left-side__food-detail__title" name="name">{data.DisplayName} </span>
                    <span className="left-side__food-detail__content"> {data.Description} </span>
                  </div>
                </div>
                <div className="right-side">
                  <span>{data.ListPrice} TL</span>
                </div>
              </div>
              <div>
                <input name="itemName" type="hidden" value={data.DisplayName}/>
                <input name="price" type="hidden" value={data.ListPrice}/>
                <input name="id" type="hidden" value={data.ProductId}/>
              </div>
            </form>
          );
        })}
      </>
    );
  }
}
