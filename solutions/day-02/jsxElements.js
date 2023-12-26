/* Exercises: JSX Elements */

// 1. what is a jsx element?
// jsx element could be a single html element or many html
// elements wrapped in a parent html element.

// 2. write your name in a jsx element and store it in a name variable
const name = <p>Noran Abdel-Aziz</p>

// 3. write a jsx element which displays your full name, country, title, gender, email, phone number. use h1 for the name and p for the rest of the information and store it in a user variable.
const user = {
    fullName: <h1>Noran Abdel-Aziz</h1>,
    country: <p>USA</p>,
    title: <p>Ms. </p>,
    gender: <p>Female</p>,
    email: <p>noran@email.com</p>,
    phoneNumber: <p>1234567899</p>
}

// 4. write a footer jsx element
const footer = (
    <footer>
        <p>this is a footer.</p>
    </footer>
)