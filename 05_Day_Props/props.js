/*
    what is props?
    props is a special keyword in react that stands for
    properties and is being used to pass data from one
    component to another and mostly from parent component
    to child component. we can say props is a data carrier
    or a means to transport data.
*/

// function syntax
const getUserInfo = (firstName, lastName, country) => {
    return `${firstName}, ${lastName}. Lives in ${country}.`
}

// call function
getUserInfo('Noran', 'Abdel-Aziz', 'USA')


// component syntax
// User component, component should start with uppercase
const User = (props) => {
    return (
        <div>
            <h1>
                {props.firstName}
                {props.lastName}
            </h1>
            <small>{props.country}</small>
        </div>
    )
}

// call/instantiate component, this component has three
// properties: firstName, lastName, country
<User firstName = 'Noran' lastName = 'Abdel-Aziz' country = 'USA'/>