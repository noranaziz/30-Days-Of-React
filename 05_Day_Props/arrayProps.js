// array props type

import React from 'react'
import ReactDOM from 'react-dom'

const Skills = (props) => {
    const skillList = props.skills.map((skill) => <li>{skill}</li>)
    return <ul>{skillList}</ul>
}
const App = () => (
    <div className='app'>
        <Skills skills = {['HTML', 'CSS', 'JavaScript']}/>
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)