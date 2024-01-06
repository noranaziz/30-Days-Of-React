// number props type

import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => <p>The weight of the object on earth is {props.weight} N.</p>

const App = () => {
    const currentYear = new Date().getFullYear()
    const birthYear = 2003
    const age = currentYear - birthYear
    const gravity = 0.81
    const mass = 75

    return (
        <div className='app'>
            <Age age = {age}/>
            <Weight weight = {gravity * mass}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)