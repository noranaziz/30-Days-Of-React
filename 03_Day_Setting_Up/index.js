// to import the doSomeMath from math.js with or without extension
import doSomeMath from './math.js'

// to import other modules
// since these modules were not exported as default, 
// we have to destructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js' // to import everything remaining

console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)