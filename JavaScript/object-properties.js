const person = {
    fname: 'john',
    lname: 'doe'
}
Object.defineProperty(person, "year", {value:"2008"})
//console.log(person.year)

Object.defineProperty(person, "lname", {value:"Smith"})
console.log(person)

console.log(Object.getOwnPropertyNames(person))
console.log(Object.keys(person))