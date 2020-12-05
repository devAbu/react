/* LET & CONST - different way to decalre variable

let --> new var, change the scope
const --> constant values

*/

/* ARROW FUNCTION - different syntax for creating JS function

- old way
  function myFnc(){...}

- new way, NO MORE ISSUES WITH THE "this" keyword
  const myFnc = () => {...}

* if we receive just one argument/parameter there is no need not ()
* if the function body has just one line (return), there is no need to {} and "return" keyword
*/

/* EXPORTS & IMPORTS - MODULES 

example:

  - person.js:
    some code
    export default some_variable
  - utility.js
    some code
    export const some_variable
    export const function
  - app.js
    import some_variable from './person.js' --> some_variable can be any other name, since we have "default" keyword in person.js

    import {some_variable} from './utility.js'
    import {function} from './utility.js'

*/

/* UNDERSTANDING CLASSES 
class = blueprint for object

class Person {
  name = 'Abu' //property

  call = () => {...} //method
}

usage:

const myPerson = new Person()
myPerson.call() // call the method 
console.log(myPerson.name) // use the variable

inheritance:
class Person extends Master

constructor() {...} // will be executed once the class is instantiated, set properties - ES6 only

myProperty = 'value' // ES7, skip the constructor function
function (arrow functions) // ES7, the function will be property

*/

/* SPREAD & REST OPERATORS - ...

SPREAD - used to split up array elements or object properties
  const newArray = [...oldArray, 1, 2, 3]
  const newObject = {...oldObject, newProp: 5}

REST - used to merge a list of function arguments into an array
  function sortArgs(...args){...return args.sort()}
*/

/* DESTRUCTURING 

easily extract array elements or object properties and store them in variables

- Array:
  [a, b] = ['Hello', 'ABU']

- Object:
  {name} = {name: 'ABU', age: 23} // just assign the name property

*/

/* REFERENCE AND PRIMITIVE TYPES 

INT, STRING, BOOLEAN, ... --> PRIMITIVE types

object and array are REFERENCE types

*/

/* ARRAY FUNCTION 

const numbers = [1, 2, 3]

const doublNumArray = numbers.map((num) => {
  return num * 2
}); // will return 2, 4, 6...save in new array (doublNumArray)

.map()
.find()
.findIndex()
.filter()
.reduce()
.concat()

*/
