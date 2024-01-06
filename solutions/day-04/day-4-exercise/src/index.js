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
const HexaColor = () => {
  const color = hexaColor()

  const colorStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
  }

  return <div style={colorStyle}>{color}</div>
}

const App = () => (
  <div className='app'>
    <div>
      <HexaColor/>
    </div>
    <div>
      <HexaColor/>
    </div>
    <div>
      <HexaColor/>
    </div>
    <div>
      <HexaColor/>
    </div>
    <div>
      <HexaColor/>
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)