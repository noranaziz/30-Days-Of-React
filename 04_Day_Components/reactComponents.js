// functional component
// can be arrow function, function declaration, or function expression
const jsx = <tag> content </tag>
const ComponentName = () => {
   return jsx
}


// jsx element, header
const header = (
   <header style={headerStyles}>
      <div className='header-wrapper'>
         <h1>welcome to 30 days of react</h1>
         <h2>getting started react</h2>
         <h3>js library</h3>
         <p>Noran Abdel-Aziz</p>
         <small>January 4th, 2024</small>
      </div>
   </header>
)

// react component
const Header = () => {
   return header
}
// or we can just return the jsx
/*
const Header = () => {
   return (
      // input header stuff here
   )
}
*/