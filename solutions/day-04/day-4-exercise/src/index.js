import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// hexadecimal color generator function
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++){
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
  }
  return '#' + color
}

// convert to react component
const HexaColor = () => <div>{hexaColor()}</div>

const rootElement = document.getElementById('root')
ReactDOM.render(<HexaColor/>, rootElement)