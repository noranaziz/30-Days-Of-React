/* Exercises: Inline Style */

const name = <p>Noran Abdel-Aziz</p>

const user = {
    fullName: <h1>Noran Abdel-Aziz</h1>,
    country: <p>USA</p>,
    title: <p>Ms. </p>,
    gender: <p>Female</p>,
    email: <p>noran@email.com</p>,
    phoneNumber: <p>1234567899</p>
}

// 1. create a style object for the main jsx
const mainStyles = {
    backgroundColor: "#F3F0F5"
}

const main = (
    <main style = {mainStyles}>
        <div>
            <p>this is the main jsx element.</p>
        </div>
    </main>
)

// 2. create a style object for the footer jsx
const footerStyles = {
    backgroundColor: "#61DBFB"
}

const footer = (
    <footer style = {footerStyles}>
        <p>this is the footer jsx element.</p>
    </footer>
)

// 3. create a style object for the app jsx
const app = (
    <div className = "app">
        {main}
        {footer}
    </div>
)