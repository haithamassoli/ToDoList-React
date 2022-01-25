import React, { Component } from "react";

import "./List.css";

class EditItem extends Component {
  state = {
    text: this.props.editedText,
  };
  textChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  changeHandler = () => {
    this.props.updateHandler(this.state.text);
  };

  render() {
    return (
      <>
        <li className="edit__item">
          <input
            value={this.state.text}
            onChange={this.textChange}
            className="edit__field"
            type="text"
          />
          <button onClick={this.changeHandler} className="edit__btn">
            <i className="fas fa-check-circle"></i>
          </button>
        </li>
      </>
    );
  }
}
export default EditItem;
