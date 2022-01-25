import React, { Component } from "react";
import "./AddToDoList.css";

class AddToDoList extends Component {
  state = {
    task: "",
  };
  changeAddHandler = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  addToDoListHandler = (e) => {
    e.preventDefault();
    if (this.state.task === "") return;
    this.props.addTaskHandler(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form
        onSubmit={this.addToDoListHandler}
        className="AddToDoList_form"
        action=""
      >
        <input
          className="input"
          value={this.state.task}
          type="text"
          placeholder="Add a task ...."
          onChange={this.changeAddHandler}
        />
        <button type="submit" className="AddToDoList__btn">
          Add
        </button>
      </form>
    );
  }
}
export default AddToDoList;
