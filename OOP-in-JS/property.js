var Person = function(firstName){
    this.firstName = firstName;
    console.log("person instantiated");
}

var person1 = new Person('Alice');
var person2 = new Person('Bob');

console.log('person 1 is ' + person1.firstName);
console.log('person 2 is ' + person2.firstName) 