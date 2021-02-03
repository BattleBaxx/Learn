import React, { Component } from 'react' 

// using class
class Welcome extends Component{
    render(){
    const {name, heroName} = this.props
    // for state edstructuring
    //const {state_1, state_2} = this.state
    return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome