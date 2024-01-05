import React from 'react'
import ReactDOM from 'react-dom'
import aminDavis from './images/amin davis.jpg'

// header component
const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>welcome to 30 days of react</h1>
            <h2>getting started react</h2>
            <h3>js library</h3>
            <p>Noran Abdel-Aziz</p>
            <small>January 5th, 2024</small>
        </div>
    </header>
)

// user card component
const UserCard = () => (
    <div className='user-card'>
        <img src={aminDavis} alt='amin davis'/>
        <h2>Amin Davis</h2>
    </div>
)

// tech list component
const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}

// main component
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>get started with react.js</p>
            <ul>
                <TechList/>
            </ul>
            <UserCard/>
        </div>
    </main>
)

// footer component
const Footer = () => {
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2024</p>
        </div>
    </footer>
}

// the app or parent/container component
const App = () => (
    <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)

const rootElement = document.getElementById('root')
// render app component using reactdom package
ReactDOM.render(<App/>, rootElement)