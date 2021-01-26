import React, { Component } from 'react' 

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "This is a message for Visitor"
        }
    }

    changeMessage()
    {
        this.setState({
            message: "You pressed it."
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Press me!</button>
            </div>
        )
    }
}

export default Message