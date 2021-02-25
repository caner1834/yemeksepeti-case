import React, { Component } from "react";
import Header from "./Header";
import Basket from "./Basket";
import Banner from "./Banner";
import Menus from "./Menus";
import restData from "../Datas/restoranData.json";
import menuData from "../Datas/menuData.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.updateBasket = this.updateBasket.bind(this);

    this.state = {
      orders: []
    };
  }

  addOrder(item, price) {
    let curr = this.state.orders.find((o) => o.id === item.id);
    if (curr) {
      this.setState((prevState) => {
       curr.quantity += item.quantity;        
        return {
          orders: prevState.orders
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          orders: prevState.orders.concat(item),
          total: prevState.total + price,
        };
      });
    }
  }

  deleteOrder(id) {
    this.setState((prevState) => {
      const newOrders = prevState.orders.filter((i) => {
        return id !== i.id;
      });
      return {
        orders: newOrders,
      };
    });
  }

  updateBasket(id, quantity) {
    this.setState((prevState) => {
      prevState.orders.find(t => t.id === id).quantity = quantity;
      return {
        orders: prevState.orders
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="custom-container">
          <div className="row">
            <div className="col-3">
              <Basket orders={this.state.orders} deleteOrder={this.deleteOrder} updateBasket={this.updateBasket} />
            </div>
            <div className="col-9">
              <Banner cafeInfo={restData} />
              <Menus menuInfo={menuData.d.ResultSet} addOrder={this.addOrder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
