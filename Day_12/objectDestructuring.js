const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
   }

// *****************
//Destructuring = short code
const nam = student.name
// we can write this in shortly
const {name} = student
console.log(name)

// ********************
// use can access multiple property
// const {std, age} = student
// console.log(std,age)

// ******************
// we can also assign new property in this way
const {meal = "milk" } = student ;

console.log(meal)

// we can rename any property which is avaiable in object

const {age: boyos} = student

console.log(boyos)

// we can access the nasted object property in this way

const {address:{zip}} = student;
console.log(zip)