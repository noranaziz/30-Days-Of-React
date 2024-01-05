import React from 'react'
import ReactDOM from 'react-dom'
import aminDavis from './images/amin davis.jpg'
/*
const welcome = 'welcome to 30 days of react'
const title = 'getting started react'
const subtitle = 'js library'
const author = {
    firstName: 'Noran',
    lastName: 'Abdel-Aziz'
}
const date = 'January 5th, 2024'

// jsx element, header
const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {author.firstName} {author.lastName}
                </p>
                <small>Date: {date}</small>
            </div>
        </header>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Header/>, rootElement)
*/

// to get the root element from the html document
const rootElement = document.querySelector('.root')

// header
const welcome = 'welcome to 30 days of react'
const title = 'getting started'
const subtitle = 'js library'
const author = {
    firstName: 'Noran',
    lastName: 'Abdel-Aziz'
}
const date = 'January 5th, 2024'

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{author.firstName} {author.lastName}</p>
            <small>Date: {date}</small>
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

// user card component
const UserCard = () => (
    <div className='user-card'>
        <img src={aminDavis} alt='amin davis'/>
        <h2>
            {author.firstName} {author.lastName}
        </h2>
    </div>
)

// main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((techs) => <li key={techs}>{techs}</li>)

const Main = () => (
    <main>
        <div className='main-wrapper'>
            <div>
                <p>
                    prereq to get started {' '}
                    <strong>
                        <em>react.js</em>
                    </strong>
                    :
                </p>
                <ul>{techsFormatted}</ul>
                {result}
                {personAge}
            </div>
            <UserCard/>
        </div>
    </main>
)

// footer
const copyright = '2024'
const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>copyright &copy;{copyright}</p>
        </div>
    </footer>
)

// app
const App = () => (
    <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)

// render app component using reactdom package
ReactDOM.render(<App/>, rootElement)