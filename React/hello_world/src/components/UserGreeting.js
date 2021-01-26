import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: true
    }
  }
  
  render() {

    // Using if-else

    // if(this.state.isLogged)
    //   return <div>Welcome particular person</div>
    // else
    //   return <div>Welcome man</div>


    // using variables

    let message
    if(this.state.isLogged)
      message = <div>Welcome particular person</div>
    else
      message = <div>Welcome man</div>

      return message
  }
}

export default UserGreeting
