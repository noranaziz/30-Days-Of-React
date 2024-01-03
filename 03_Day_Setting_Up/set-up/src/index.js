import React from 'react';
import ReactDOM from 'react-dom';

// header
const header = (
  <header>
    <h1>welcome to 30 days of react</h1>
    <h2>setting up react</h2>
    <h3>js library</h3>
    <p>Noran Abdel-Aziz</p>
    <small>December 27th, 2023</small>
  </header>
)

// main
const main = (
  <main>
    <p>prereq to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// footer
const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
)

// header, main, and footer
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
