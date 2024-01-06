// boolean props type

import React from 'react'
import ReactDom from 'react-dom'

const Status = (props) => {
    // ternary operator to check status of person
    let status = props.status ? 'old enough to drive' : 'too young to drive'
    return <p>{status}</p>
}

const App = () => {
    let currentYear = new Date().getFullYear()
    let birthYear = 2003
    const age = currentYear - birthYear
    let status = age >= 16

    return (
        <div className='app'>
            <Status status = {status}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)