import React, { Component } from 'react'
import MemoComp from './MemoComponent'
// import PureComp from './PureComponent'
// import RegularComp from './RegularComponent'

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'PEPE'
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'PEPE'
      })
    }, 2000)
  }
  render() {
    console.log('parent comp render')
    return (
      <div>
        Parent Component
        {/* <RegularComp name = {this.state.name}></RegularComp> */}
        {/* <PureComp name = {this.state.name}></PureComp> */}
        <MemoComp name = {this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
