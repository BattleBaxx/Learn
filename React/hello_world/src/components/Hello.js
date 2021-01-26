import React from 'react'

const Hello = () =>{
    return(
        <div>
            <h1>Hello man</h1>
        </div>
        
    )
}

export default Hello

// without JSX

// const Hello = () =>{
//      return React.createElement('div', null,React.createElement('h1', null, 'Hello Man'))
// }