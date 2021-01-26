import React from 'react'

// using functions
// Destructuring in the parameter
const Greet = ({name, heroName}) => {
    return(
        <div>
            <h1>Hi {name} a.k.a {heroName}</h1>
        </div>
    )
}

// Destructuring in the function body

// const Greet = (props) => {
//     const {name, heroName} = props
//     return(
//         <div>
//             <h1>Hi {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }
export default Greet;