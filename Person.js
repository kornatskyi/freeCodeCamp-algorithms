/**
 * Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */


var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
   
   let firstName = firstAndLast.split(' ')[0];
   let lastName = firstAndLast.split(' ')[1];
   let fullName = firstName + " " + lastName;

  this.getFullName = function () {
    return fullName;
  };

  this.getFirstName = function () {
    return firstName;
  }; 
  this.getLastName = function () {
    return lastName;
  }; 
  this.setFirstName = function (first) {
    firstName = first;
    fullName = firstName + " " + lastName;


  }; 
  this.setLastName = function (last) {
    lastName = last;
    fullName = firstName + " " + lastName;
    
  }; 
  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    fullName = firstName + " " + lastName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

bob.setFirstName("Haskell")
console.log(bob.getFullName());
