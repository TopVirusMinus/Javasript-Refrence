
//comment

/*
multi
line
comment
*/

// var, let , const (use let instead of var)

//! alert in page
alert("Hello");

//!logging in console
console.log("This will be shown in the console");
console.error("Custom Error Message");

//!const, bool, null, undefined, numbers  ,strings
const name= "Mustafa";
const age= 18;
const rating= 4.5;
const iscool= true;
const x = null;
const y= undefined;
let z; //undefined

console.log(typeof x)

//!concatenation
const name= "Mustafa";
const age = 18

console.log("My name is "+name+", I am "+18+" Years old");

//!template string (` (ذ) insted of ')
console.log(`My name is ${name}, I am ${age} years old`);


//!String functions
const name= "Mustafa";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,5)); //cuts the name from 0 to 4
console.log(name.substring(0,5).toUpperCase());
console.log(name.split('')); //convert it to array

//Arrays
const names= new Array(1,2,3,4,5); //constructor
const arr = [1, 2, 3, "Mustafa", true, null, undefined];
console.log(names);
console.log(arr);
console.log(arr[3]);
arr.push("Hamada"); //adds hamada last
arr[3]= "Virus"; //changes Mustafa to Virus
arr.unshift("Mustafa"); //puts mustafa on the beggining
arr.pop(); //removes last element in the array
console.log(Arrray.isArray(arr)); //checks if arr is an array
console.log(arr.indexOf("Mustafa")); //gives back the index of Mustafa


//!Objects
const person={
    firstName: 'Mustafa',
    lastName: 'Walid',
    age: 18,
    lovesProgramming: true,
    hobbies: ['movies', 'sports', 'gaming'],
    address: {
        street: '19 st',
        city: '6 October',
        state: 'El Giza'
    }
}
person.email= "mwmma5000@gmail.com"; //adds email key with bvalue we assigned to our object
console.log(person); //print Object
console.log(person.firstName); //print Object's firstName
console.log(person.firstName, person.lastName); //print Object's firstName and lastName in same line
console.log(person.hobbies[1]); //prints sports
console.log(person.address.city); //prints city

const {firstName, lastName, address:{city}}= person; //pulling first name and last name from the object and assigning them to a variable called with the same name 'firstName'
console.log(firstName);

//! JSON data format (list of objects but only "" for keys and strings)
const todos=[
    {
        id: 1,
        text: "Take out trash",
        isDone: true
    },

    {
        id:2,
        text: "Buy Food",
        isDone: true
    },

    {
        id:3,
        text: "Go to dentist",
        isDone: false
    }
]

console.log(todos);
console.log(todos[1].text); //prints second text
const Jsontodo= JSON.stringify(todos); //Convert object into JSON format
console.log(Jsontodo);


//! for loops
for(let i=0; i<=10; i++) {
    console.log(`i= ${i}`);
}

//! for loop in array
for(let todo of todos){  //for each index in todos
    console.log(todo.text); //log text in todo
}

//! for each
todos.forEach(function(todo){
    console.log(todo.text);
})

//! map
const todoTextArr= todos.map(function(todo){ //returns text of the object todos inside of an array
    return todo.text
})
console.log(todoTextArr);

//! filter
const todoCompleted= todos.filter(function (todo){ //returns only completed
    return todo.isDone === true;
})
console.log(todoCompleted);

//! combining filter and map
const todoCompleted= todos.filter(function (todo){ //returns only completed
    return todo.isDone === true;
}).map(function(todo){
    todo.text               //returns array of text element of completed ones
})

console.log(todoCompleted);

//! while loop
let i=0
while(i <= 10){
    console.log(`i= ${i}`);
    i++
}

//! If Statments (&& and, || or)
const i= 15;
const j= 10
if(i > j){
    console.log("i is greater than j")
}else if(i < j){
    console.log("i is smaller than j");
}
else{
    console.log("i is equal j");
}

//! Ternary Operator
const x= 10

const color= x>10? 'red': 'blue'
//           if x>10 then color = 'red' else color='blue'    (' ? ' = then, ' : ' = else)
console.log(color);

//! Switch
const x= 10

const color= x>10? 'red': 'blue'

switch(Color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('blue');
        break;
    default:
        console.log("Not Red or Blue");
        break;
}


//! Functions
function addNums(n1=0, n2=0){ //default value of 0 (optional)
    return n1+n2
}
console.log(addNums(5,5))

//! Arrow Functions
const addNums= (n1, n2) => n1+n2  //no 'function' written , no ' {} ', no 'return'

console.log(addNums(5,5))

//! Arrow Function for 'For Each'
todos.forEach(todo => log(todo.text))

//!Constructor Function
function Person(firstName, lastName, dateOfBirth){
    this.firstName= firstName;

    this.lastName = lastName;

    this.dateOfBirth = new Date(dateOfBirth);

    this.getYear= function(){       //not declared, it takes date of birth and extracts only year
       return this.dateOfBirth.getFullYear()
    }

    this.fullName= ()=> `${this.firstName} ${this.lastName}` //getting fullname using arrow function
}
person1= new Person("Mustafa", "Walid", "9-16-2002");
console.log(person1.getYear()) //calling the undeclared function
console.log(person1.fullName())
console.log(person1)

//! Constructor Prototype
//You can put your functions in the prototype of the constructor function so they dont show in the main constructor when printing it but it will show in the prototype sections

function Person(firstName, lastName, dateOfBirth){
    this.firstName= firstName;

    this.lastName = lastName;

    this.dateOfBirth = new Date(dateOfBirth);
}

Person.prototype.getYear= function(){
    return this.dateOfBirth.getFullYear();
    }

Person.prototype.fullName= function(){
    return `${this.firstName} ${this.lastName}`;
}
person1= new Person("Mustafa", "Walid", "9-16-2002");

//console.log(person1)
console.log(person1);
console.log("---------------------------");
console.log(person1.fullName())
console.log(person1.getYear())

//this saves memory as i wont show it unless i need it

//! Classes to make it prettier
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName= firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getYear() {
        return this.dateOfBirth.getFullYear();
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

person1= new Person("Mustafa", "Walid", "9,16,2002")
console.log(person1)
console.log(person1.getYear())
console.log(person1.fullName())