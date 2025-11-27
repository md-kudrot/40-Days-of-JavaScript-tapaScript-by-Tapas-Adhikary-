// Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

// name, company, and address.city

const {name,company:{name : companyName,location:{city}}} = person;
console.log(name, companyName, city)