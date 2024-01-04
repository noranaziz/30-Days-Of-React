import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = (
  <div className='title-wrapper'>
    <h1>subscribe</h1>
  </div>
)
const subtitle = (
  <div className='subtitle-wrapper'>
    <p>sign up with your email address to receive news and updates.</p>
  </div>
)

const firstNameInput = <input id='input1' type='text' placeholder='first name'></input>
const lastNameInput = <input id='input2' type='text' placeholder='last name'></input>
const emailInput = <input id='input3' type='text' placeholder='email'></input>
const inputs = (
  <div className='inputs-wrapper'>
    {firstNameInput} {lastNameInput} {emailInput}
  </div>
)
const subscribeBtn = <button></button>

const app = (
  <div className='app'>
    {title}
    {subtitle}
    {inputs}
    {subscribeBtn}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)