import React, { Component } from "react";

import "./List.css";
import Item from "./Item";

class List extends Component {
  deleteHandler = (id) => {
    this.props.deleteHandler(id);
  };
  updateHandler = (editedText, id) => {
    this.props.updateHandler(editedText, id);
  };
  checkHandler = (id) => {
    this.props.checkHandler(id);
  };
  deleteAll = () => {
    this.props.deleteAll();
  };
  render() {
    if (!this.props.list || this.props.list.length === 0) {
      return (
        <div className="ToDOList__list">
          <p style={{ textAlign: "center" }}>Add Item in the list</p>
        </div>
      );
    }
    return (
      <div className="ToDOList__list">
        <ul>
          {this.props.list.map((item) => (
            <Item
              key={item.id}
              deleteHandler={this.deleteHandler}
              updateHandler={this.updateHandler}
              checkHandler={this.checkHandler}
              item={item}
            />
          ))}
        </ul>
        <button className="delete_btn" onClick={this.deleteAll}>
          Delete All
        </button>
      </div>
    );
  }
}
export default List;
