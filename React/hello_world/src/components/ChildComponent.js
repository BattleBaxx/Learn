import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* no parameters */}
      {/* <button onClick = {props.greetHandler}>Greet Parent</button> */}

      {/* With parameters */}
      <button onClick = {() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
