import { prettyDOM } from "@testing-library/react";
import React, { Component } from "react";
import AddToDoList from "./AddToDoList";
import List from "./List";
import "./ToDoList.css";

class ToDoList extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    this.LoadTasksFromLocalStorage();
  }
  LoadTasksFromLocalStorage = () => {
    this.setState((prevState) => {
      let list;
      if (localStorage.getItem("list")) {
        list = JSON.parse(localStorage.getItem("list"));
      } else {
        list = [];
      }

      return {
        list: list,
      };
    });
  };
  addTask = (taskText) => {
    const task = {
      text: taskText,
      id: Math.random(),
      check: false,
    };

    this.setState((prevState) => {
      const newList = [task, ...prevState.list];
      localStorage.setItem("list", JSON.stringify(newList));

      return {
        list: newList,
      };
    });
  };

  deleteHandler = (id) => {
    this.setState((prevState) => {
      const newList = prevState.list.filter((item) => item.id !== id);
      localStorage.setItem("list", newList);
      return {
        list: newList,
      };
    });
  };
  deleteAll = () => {
    this.setState((prevState) => {
      localStorage.clear();
      return {
        list: [],
      };
    });
  };
  updateHandler = (editedText, id) => {
    this.setState((prevState) => {
      const index = prevState.list.findIndex((item) => item.id == id);
      prevState.list[index].text = editedText;
      const newList = prevState.list;
      localStorage.setItem("list", JSON.stringify(newList));
      return {
        list: newList,
      };
    });
  };

  checkHandler = (id) => {
    this.setState((prevState) => {
      const index = prevState.list.findIndex((item) => item.id == id);
      prevState.list[index].check = true;
      const newList = prevState.list;
      localStorage.setItem("list", JSON.stringify(newList));
      return {
        list: newList,
      };
    });
  };

  render() {
    return (
      <section className="toDoList">
        <AddToDoList addTaskHandler={this.addTask} />
        <List
          deleteHandler={this.deleteHandler}
          updateHandler={this.updateHandler}
          checkHandler={this.checkHandler}
          deleteAll={this.deleteAll}
          list={this.state.list}
        />
      </section>
    );
  }
}
export default ToDoList;
