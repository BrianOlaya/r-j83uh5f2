import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state ={
    count:0,
    name:""
  }

  handleChange = (event)=> {
    this.setState({name:event.target.value})
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange}  value={this.state.name}></textarea>
        <div className="counter" >{this.state.name.length}</div>
      </div>
    );
  }
}

export default App;
