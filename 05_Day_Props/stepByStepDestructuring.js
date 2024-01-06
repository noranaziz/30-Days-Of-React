// destructuring props

// destructuring code to some extent makes it easy to read.
// let us destructure the props in the Header component.
// everything we passed as props is stored in the props 
// object. therefore, props is an object and we can 
// destructure the properties. 

// 1. step by step destructuring
import React from 'react'
import ReactDOM from 'react-dom'

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

const Header = (props) => {
    const data = props.data
    const {welcome, title, subtitle, author, date} = data
    const {firstName, lastName} = author
    
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

    return (
        <div className='app'>
            <Header data = {data}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)