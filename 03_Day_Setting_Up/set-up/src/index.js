import React from 'react';
import ReactDOM from 'react-dom';
/* importing media objects in react
  create images folder in the src folder and save an image
  inside
  after importing, we will inject it to a jsx expression
*/
import thatamindavis from './images/amin davis.jpg'

const aminDavis = (
  <div>
    <img src={thatamindavis} alt='amin davis'/>
  </div>
)


// header
/* inline style
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5
}
*/

const welcome = 'welcome to 30 days of react'
const title = 'setting up react'
const subtitle = 'js library'
const author = {
  firstName: 'Noran',
  lastName: 'Abdel-Aziz',
}
const date = 'January 3rd, 2024'

const header = (
  <header>
    <div className = 'header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{author.firstName} {author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2
const result = (
  <p>{numOne} + {numTwo} = {numOne + numTwo}</p>
)

const yearBorn = 2003
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// main
/* inline style
const mainStyles = {
  backgroundColor: '#F3F0F5'
}
*/

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>prereq to get started {' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {aminDavis}
    </div>
  </main>
)

// footer
/* inline style
const footerStyles = {
  backgroundColor: '#61DBFB'
}
*/

const copyright = 'Copyright 2023'

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyright}</p>
    </div>
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
