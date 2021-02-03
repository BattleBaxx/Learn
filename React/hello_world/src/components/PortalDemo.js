import React from 'react'
import ReactDom from 'react-dom'
function PortalDemo() {
  return ReactDom.createPortal(<div>
    <h1>Portal demo</h1>
  </div>, document.getElementById('portal-demo'))
}

export default PortalDemo
