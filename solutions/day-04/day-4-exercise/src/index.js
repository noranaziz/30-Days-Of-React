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
    height: '50px',
    padding: '10px',
    borderRadius: '5px'
  }

  return <div style={colorStyle}>{color}</div>
}

const App = () => (
  <div className='app'>
    <div className='color-1'>
      <HexaColor/>
    </div>
    <div className='color-2'>
      <HexaColor/>
    </div>
    <div className='color-3'>
      <HexaColor/>
    </div>
    <div className='color-4'>
      <HexaColor/>
    </div>
    <div className='color-5'>
      <HexaColor/>
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)