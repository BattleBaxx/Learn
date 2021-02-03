import React from 'react'

function FunctionClick() {
  function clickHandler(){
    console.log("Clicked function button")
  }
  return (
    <div>
      <button onClick = {clickHandler}>Click (function)</button>
    </div>
  )
}

export default FunctionClick
