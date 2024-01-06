// string props type

import React from 'react'
import ReactDOM from 'react-dom'

// Header component
const Header = (props) => {
    console.log(props)
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{props.welcome}</h1>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p>
                    {props.firstName} {props.lastName}
                </p>
                <small>{props.date}</small>
            </div>
        </header>
    )
}

// the app, or parent/container component
// functional component
const App = () => (
    <div className='app'>
        <Header 
            welcome = 'welcome to 30 days of react'
            title = 'getting started'
            subtitle = 'js library'
            firstName = 'Noran'
            lastName = 'Abdel-Aziz'
            date = 'January 6th, 2024'
        />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

// if you check the browser console, you will get the
// following object:
{
    firstName: "Noran";
    lastName: "Abdel-Aziz";
    date: "January 6th, 2024";
    subtitle: "js library";
    title: "getting started";
    welcome: "welcome to 30 days of react";
}

// as you can see from the above example, the value of the
// props are written statically. however, if we want to 
// apply some logic, it is hard to implement with statically
// written data, so it will be better to use a variable as
// props:
const newHeader = (props) => (
    <header>
        <div className='header-wrapper'>
            <h1>{props.welcome}</h1>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>
                {props.firstName} {props.lastName}
            </p>
            <small>{props.date}</small>
        </div>
    </header>
)

const newApp = () => {
    const welcome = 'welcome to 30 days of react'
    const title = 'getting started'
    const subtitle = 'js library'
    const firstName = 'Noran'
    const lastName = 'Abdel-Aziz'
    const date = 'January 6th, 2024'

    return (
        <div className='app'>
            <newHeader
                welcome = {welcome}
                title = {title}
                subtitle = {subtitle}
                firstName = {firstName}
                lastName = {lastName}
                date = {date}
            />
        </div>
    )
}

rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)