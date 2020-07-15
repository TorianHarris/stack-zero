import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStack: [],
    };
  }

  handleStackButtonClick = (name) => {
    const newStack = this.state.currentStack;
    newStack.push(name);
    this.setState({ currentStack: newStack });
  };

  handleRemoveFromStack = (id) => {
    const newStack = this.state.currentStack;
    newStack.splice(id, 1);
    this.setState({ currentStack: newStack });
  };

  handleMoveToStackBottom = (id) => {
    const newStack = this.state.currentStack;
    newStack.push(newStack.splice(id, 1));
    this.setState({ currentStack: newStack });
  };

  render() {
    const cardTypes = ["Draw", "Heal", "Stand", "Critical", "Grade 1", "Grade 2", "PG", "Tom"];
    const stackButtons = cardTypes.map((type, i) => (
      <button class="stack-button" key={i} onClick={() => this.handleStackButtonClick(type)}>
        {type}
      </button>
    ));

    return (
      <div className="App">
        <div class="button-container">{stackButtons}</div>
        <p>Total Stack: {this.state.currentStack.length}</p>
        <div class="stack-container">
          {this.state.currentStack.map((card, i) => (
            <div class="stack-list-item" key={i}>
              <div class="stack-item-content ">
                <p class="stack-item-name">{card}</p>
                <button onClick={() => this.handleMoveToStackBottom(i)}>Bottom</button>
                <button style={{ "margin-left": 5 }} onClick={() => this.handleRemoveFromStack(i)}>
                  Remove
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
