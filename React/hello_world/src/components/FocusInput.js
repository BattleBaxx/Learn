import React, { Component } from 'react'

 class FocusInput extends Component {
   constructor(props) {
     super(props)
   
     this.ComponenetRef = React.createRef()
   }
   clickHandler = () => {
     this.ComponenetRef.current.FocusInput()
   }
  render() {
    return (
      <div>
        <input ref = {this.ComponentRef}></input>
        <button onClick = {this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
