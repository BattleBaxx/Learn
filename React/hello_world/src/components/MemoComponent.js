import React from 'react'

function MemoComp({name}) {
  console.log("Rendering memo component");
  return (
    <div>
      
    </div>
  )
}

export default React.memo(MemoComp)
