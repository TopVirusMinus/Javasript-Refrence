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