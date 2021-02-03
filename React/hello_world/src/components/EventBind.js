import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Message 1"
    }

    // this.clickHandler = this.clickHandler.bind(this)

  }
  // clickHandler(){
  //   if(this.state.message === "Message 1")
  //   {
  //     this.setState({
  //       message: "Message 2"
  //    })
  //   }
  //   else
  //   {
  //     this.setState({
  //       message: "Message 1"
  //    })
  //   }
    
  // }

  clickHandler = () => {
    this.setState({
      message: "Message 2"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Using bind */}
        {/* <button onClick = {this.clickHandler.bind(this)}>Click it.</button> */}
        {/* using arrow functions   */}
        {/* <button onClick = {() => this.clickHandler()}>Click it.</button> */}
        {/* <button onClick = {this.clickHandler}>Click it.</button> */}
        <button onClick = {this.clickHandler}>Click it.</button>
      </div>
    )
  }
}

export default EventBind
