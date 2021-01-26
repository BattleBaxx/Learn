import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: 'Pepe'
     }
     console.log('Lifecycle A constructor');
   }
   
   static getDerivedFromProps(props, state){
    console.log('Lifecycle A getDerivedFromprops');
    return null
   }

   componentDidMount(){
     console.log('Lifecycle A componentDidMount');
   }

   shouldComponentUpdate(){
    console.log('Lifecycle A shouldComponentUpdate');
    return true
   }

   getSnapshotBeforeUpdate(){
    console.log('Lifecycle A getSnapshotBeforeUpdate');
    return null
   }

   componentDidUpdate(){
    console.log('Lifecycle A componentDidUpdate');
   }

   changeState(){
     this.setState({
       name: "Pepe 2"
     })
   }

  render() {
    console.log('Lifecycle A render');
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick = {this.changeState.bind(this)}>Change state</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
