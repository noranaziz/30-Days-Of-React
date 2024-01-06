// in previous section, we injected data as follows.
// we will change these data to props
const welcome = 'welcome to 30 days of react'
const title = 'getting started'
const subtitle = 'js library'
const author = {
    firstName: 'Noran',
    lastName: 'Abdel-Aziz',
}
const date = 'January 6th, 2024'

// header component (old)
/*
const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                {author.firstName} {author.lastName}
            </p>
            <small>{date}</small>
        </div>
    </header>
)
*/

// react props is an object which you get instantly when
// you create a react component. before we pass properties
// to the component, let's check what do we get in the
// props object.
import React from 'react'
import ReactDOM from 'react-dom'

// header component
const Header = (props) => {
    console.log(props) // empty object, {}
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {author.firstName} {author.lastName}
                </p>
                <small>{date}</small>
            </div>
        </header>
    )
}

// app, or parent/container component
// functional component
/*
const App = () => {
    return (
        <div className='app'>
            <Header/>
        </div>
    )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
*/

// in the above console.log(props), you would get an empty
// object ({}). that means if you do not pass any
// attributes or properties when you instantiate the 
// component, the props will be empty, otherwise it will be
// populated with the data you passed as attributes and 
// the proper name of these attributes as props

// in the example below, the welcome string has been passed
// as props in the Welcome component

const Welcome = (props) => {
    console.log(props) // {welcome:'welcome to 30 days of react'}
    return (
        <header>
            <div className='welcome-wrapper'>
                <h1>{props.welcome}</h1>
            </div>
        </header>
    )
}

// app, or parent/container component
// functional component
const App = () => {
    return (
        <div className='app'>
            <Welcome welcome='welcome to 30 days of react'/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

// now when you do console.log(props), you should get the
// following object:
{
    welcome: 'welcome to 30 days of react'
}