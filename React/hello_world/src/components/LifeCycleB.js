import React, { Component } from 'react'

 class LifeCycleB extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: 'Pepe'
     }
     console.log('LifeCycle B constructor');
   }
   
   static getDerivedFromProps(props, state){
    console.log('LifeCycle B getDerivedFromprops');
    return null
   }

   componentDidMount(){
     console.log('LifeCycle B componentDidMount');
   }

   shouldComponentUpdate(){
    console.log('LifeCycle B shouldComponentUpdate');
    return true
   }

   getSnapshotBeforeUpdate(){
    console.log('LifeCycle B getSnapshotBeforeUpdate');
    return null
   }

   componentDidUpdate(){
    console.log('LifeCycle B componentDidUpdate');
   }

  render() {
    console.log('LifeCycle B render');
    return (
      <div>
        <div>LifeCycle B</div>
      </div>
    )
  }
}

export default LifeCycleB
