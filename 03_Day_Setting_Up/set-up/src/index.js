import React from 'react';
import ReactDOM from 'react-dom';

// header
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style = {headerStyles}>
    <div className = 'header-wrapper'>
      <h1>welcome to 30 days of react</h1>
      <h2>setting up react</h2>
      <h3>js library</h3>
      <p>Noran Abdel-Aziz</p>
      <small>December 27th, 2023</small>
    </div>
  </header>
)

// main
const mainStyles = {
  backgroundColor: '#F3F0F5'
}

const main = (
  <main style = {mainStyles}>
    <p>prereq to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// footer
const footerStyles = {
  backgroundColor: '#61DBFB'
}

const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2023</p>
  </footer>
)

// header, main, and footer
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
