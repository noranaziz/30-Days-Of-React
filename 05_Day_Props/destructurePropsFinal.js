// let's destructure all the components we had and assemble
// them together. we pass props from one component to
// another typically from parent to a child component.
// for instance, in the Main component, techs, user, sayHi,
// and handleTime props have been passed from the parent
// component Main to child components TechList and UserCard.

import React from 'react'
import ReactDOM from 'react-dom'
import aminDavisImage from './images/amin davis.jpg'

// function to show month, date, year
const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
}

// Header component
const Header = ({
    data: {
        welcome,
        title,
        subtitle,
        author: {
            firstName,
            lastName,
        },
        date,
    },
}) => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    )
}

// TechList component
const TechList = ({techs}) => {
    const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techList
}

// UserCard component
const UserCard = ({
    user: {
        firstName,
        lastName,
        image,
    }
}) => (
    <div className='user-card'>
        <img src={image} alt = {firstName}/>
        <h2>
            {firstName}
            {lastName}
        </h2>
    </div>
)

// Button component
const Button = ({ text, onClick, style}) => (
    <button style={style} onClick={onClick}>{text}</button>
)

// css styles in js object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: none,
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
}

// Main component
const Main = ({user, techs, sayHi, handleTime}) => (
    <main>
        <div className='main-wrapper'>
            <p>prereq to get started react.js:</p>
            <ul>
                <TechList techs = {techs}/>
            </ul>
            <UserCard user = {user}/>
            <Button text = 'say hi!' onClick={sayHi} style={buttonStyles}/>
            <Button text = 'show time' onClick={handleTime} style={buttonStyles}/>
        </div>
    </main>
)

// Footer component
const Footer = ({copyright}) => (
    <footer>
        <div className='footer-wrapper'>
            <p>copyright {copyright.getFullYear()}</p>
        </div>
    </footer>
)

// App component
const App = () => {
    const data = {
        welcome: 'welcome to 30 days of react',
        title: 'getting started',
        subtitle: 'js library',
        author: {
            firstName: 'Noran',
            lastName: 'Abdel-Aziz',
        },
        date: new Date(),
    }
    const date = new Date()
    const techs = ['HTML', 'CSS', 'JavaScript']
    // copy author from data object to user variable using spread operator
    const user = {...data.author, image: aminDavisImage}
    const handleTime = () => {
        alert(showDate(new Date()))
    }
    const sayHi = () => {
        
    }
}