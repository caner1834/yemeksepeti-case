import React, { Component } from "react";
import MenuItem from "./MenuItem";

export default class Menus extends Component {
  
  render() {
    return (
      <>
        {this.props.menuInfo.map((data) => {
          return (
            <div className="menu" key={data.Oid}>
              <div className="menu__title">
                <span>{data.DisplayName} </span>
              </div>
              <div className="menu__items">
                <MenuItem menuItems={data.Products} addOrder={this.props.addOrder} />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
