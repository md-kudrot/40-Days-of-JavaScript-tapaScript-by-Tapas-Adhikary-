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
const { name } = student
console.log(name)

// ********************
// use can access multiple property
// const {std, age} = student
// console.log(std,age)

// ******************
// we can also assign new property in this way
const { meal = "milk" } = student;

console.log(meal)

// we can rename any property which is avaiable in object

const { age: boyos } = student

// console.log(boyos)

// we can access the nasted object property in this way

const { address: { zip } } = student;
// console.log(zip)


// function Destructuring

function sendEmail({ parents: { email } }) {
  // console.log(`Sent an email to ${email}`)
}

sendEmail(student)




const getStudent = () => {
  return {
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
}

// General way to access name and subjects

// const anotherStu = getStudent()
// const anotherStuName = anotherStu.name
// const anotherStuSub = anotherStu.subjects

// console.log(anotherStuName , anotherStuSub)

// we can do this same work in shortcut using Destructuring

const {name: anotherStuName , subjects: anotherStuSub} = getStudent();

// console.log(anotherStuName,anotherStuSub)









// Loop Destructuring

const students = [
  {
    'name': 'William',
    'grade': 'A'
  },
  {
    'name': 'Tom',
    'grade': 'A+'
  },
  {
    'name': 'Bob',
    'grade': 'B'
  }
];

for (let {name,grade} of students){
  // console.log(name,grade)
}


// Optional Chaining

const employee = {
  slary: {
    bonus: 300
  }
}

// when we try to access any property which is not available in object , we get error / undefined
// example:
// console.log(employee.depertment): // undefined
// console.log(employee.department.name); //error
// ei error theke basar jonno short way ase

// short way to pass the error and get undefined
const empDep = employee.department?.name 

console.log(empDep) // undefined
