const person1 = {
    Firstname: 'john',
    Lastname: 'doe',
    age: 34
}

const person2 = {
    Firstname:'anne', 
    Lastname:'smith'
}

Object.assign(person1,person2) //copies properties from one or more source objects to a target object.
console.log('assign() : ',person1)
 
console.log('entries() :', Object.entries(person1)) //returns an array of the key/value pairs in an object

console.log('values() : ',Object.values(person1)) //returns a single dimension array of the object values

console.log('keys() : ',Object.keys(person1, person2)) //method returns an array with the keys of an object