import React, { Component } from "react";
import EditItem from "./EditItem";

import "./List.css";

class Item extends Component {
  state = {
    check: this.props.item.check,
    edit: false,
  };
  checkHandler = () => {
    this.setState((prevState) => {
      return {
        check: true,
      };
    });
    this.props.checkHandler(this.props.item.id);
  };
  deleteHandler = (e) => {
    this.props.deleteHandler(this.props.item.id);
  };
  editHandler = () => {
    this.setState({ edit: true });
  };

  updateHandler = (editedText) => {
    this.setState({
      edit: false,
    });
    this.props.updateHandler(editedText, this.props.item.id);
  };

  render() {
    if (this.state.edit) {
      return (
        <EditItem
          editedText={this.props.item.text}
          updateHandler={this.updateHandler}
        />
      );
    } else {
      return (
        <>
          <li>
            {this.state.check === true ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              ""
            )}

            {this.props.item.text}

            <i
              onClick={this.deleteHandler}
              style={{ cursor: "pointer", color: "red" }}
              className="far fa-trash-alt"
            ></i>
            <i onClick={this.editHandler} className="fas fa-edit"></i>
          </li>
          {this.state.check ? (
            ""
          ) : (
            <button className="done__btn">
              <i
                onClick={this.checkHandler}
                className="fas fa-check-circle"
              ></i>
            </button>
          )}
        </>
      );
    }
  }
}
export default Item;
