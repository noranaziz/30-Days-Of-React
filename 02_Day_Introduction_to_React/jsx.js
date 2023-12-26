/* 
JSX stands for JavaScript XML. 
JSX allows us to write HTML elements with JavaScript code.
to create HTML elements in React, we do not use the createElement() method
instead, we just use JSX elements.
*/

// JSX syntax
// we don't need to use quotes with JSX
const jsxElement = <h1>I am a JSX element</h1>
const welcome = <h1>Welcome to 30 Days of React</h1>
const data = <small>12/25/2023</small>

// JSX element
const title = <h2>Getting started with React</h2>
const header = (
    <header>
        <h1>Welcome to 30 days of react</h1>
        <h2>Getting started with react</h2>
        <h3>JS library</h3>
        <p>Noran Abdel-Aziz</p>
        <small>12/25/2023</small>
    </header>
)

// rendering a JSX element
// to render a JSX element to a HTML doc, we should first
// create an index.html
// the index.html is the only HTML file you will have 
// in any react app