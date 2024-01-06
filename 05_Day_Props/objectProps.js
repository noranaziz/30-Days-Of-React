// object props type

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{props.data.welcome}</h1>
                <h2>{props.data.title}</h2>
                <h3>{props.data.subtitle}</h3>
            </div>
        </header>
    )
}

const App = () => {
    const data = {
        welcome: 'welcome to 30 days of react',
        title: 'getting started',
        subtitle: 'js library',
    }

    return (
        <div className='app'>
            <Header data = {data}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)


// now let's change all the previous header properties 
// to an object
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

const NewHeader = (props) => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{props.data.welcome}</h1>
                <h2>{props.data.title}</h2>
                <h3>{props.data.subtitle}</h3>
                <p>
                    {props.data.author.firstName} {props.data.author.lastName}
                </p>
                <small>{showDate(props.data.date)}</small>
            </div>
        </header>
    )
}

const NewApp = () => {
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

    return (
        <div className='app'>
            <NewHeader data = {data}/>
        </div>
    )
}

rootElement = document.getElementById('root')
ReactDOM.render(<NewApp/>, rootElement)