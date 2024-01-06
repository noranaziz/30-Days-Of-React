// function prop types

import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
    const sayHi = () => {
        alert('hi')
    }

    return (
        <div className='app'>
            <Button text = 'say hi!' onClick = {sayHi}/>
            <Button text = 'show time!' onClick = {() => alert(new Date())}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

// in the above example, onClick is a props to hold the
// sayHi function. html has onclick, onhover, onkeypress, etc
// event handlers. in react, these handlers are camelCase.
// let's see some more functions as props to give a clear
// understanding how to handle function as props in a 
// react component

// this component shows month, date, and year as an alert.
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

const NewButton = (props) => <button onClick={props.onClick}>{props.text}</button>

const NewApp = () => {
    const handleTime = () => {
        alert(showDate(new Date()))
    }
    const sayHi = () => {
        alert('hi!')
    }

    return (
        <div className='app'>
            <NewButton text = 'say hi!' onClick = {sayHi}/>
            <NewButton text = 'show time!' onClick = {handleTime}/>
        </div>
    )
}

rootElement = document.getElementById('root')
ReactDOM.render(<NewApp/>, rootElement)