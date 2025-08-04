console.log(factorial(8))
function factorial(n){
    return n < 2 ? 1 : n * factorial(n - 1);
}


//arrow function

const msg = (age) => {
    let result = (age < 18) ? 'Not eligible to vote' : 'Old enough to vote'
    return result
}
console.log(msg(43));


//function with default parameter

function area(radius, pi = 3.14){
    let area = pi * radius * radius
    return `Area of circle: ${area}`
}

console.log(area(5))

//function with parameter

function toCelcius(fahrenheit){
    let result = (5/9) * (fahrenheit - 32)
    return `${fahrenheit} fahrenheit is ${result} Celcius`
}

console.log(toCelcius(4))

