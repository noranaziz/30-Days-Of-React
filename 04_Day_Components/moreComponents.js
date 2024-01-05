// the button component is made up of a single html element
// const Button = () => <button>action</button>

// style button
/*
const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0)',
    border: 'none',
    borderRadius: 5,
}
const Button = () => <button style={buttonStyles}>action</button>
*/

import React from 'react'
import ReactDOM from 'react-dom'

// hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}
const HexaColor = () => <div>{hexaColor()}</div>

const rootElement = document.getElementById('root')
ReactDOM.render(<HexaColor/>, rootElement)