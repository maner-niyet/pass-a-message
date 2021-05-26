import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      inputValue: '',
      passedMsg: ''
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  };

  passMsg =() => {
    const newMsg = this.state.inputValue.toUpperCase().trim();
    if(this.state.inputValue) {
      this.setState({
        passedMsg: newMsg,
        inputValue: ''
      })
    } else {
      alert("enter message")
    }
  }

  render(){
    return (
      <div className='container'>
        <h4>A Message You Would Like To Pass</h4>
        <input value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.passMsg}>Submit</button>
        <div className="alert"></div>
        <h4>Last Message Delivered</h4>
        <div className="message">{this.state.passedMsg}</div>
      </div>
    )
  }
}

export default App;
