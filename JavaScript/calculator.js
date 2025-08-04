//Build a calculator using objects, function an loop

const calculator = {
    add : function(num1, num2){
        return num1 + num2
    },
    sub : function(num1, num2){
        return num1- num2 
    },
    mul : function(num1, num2){
        return num1* num2
    },
    div : function(num1, num2){
        if(num2 === 0){
            return "Cannot be divided by zero"
        }
        return num1/ num2
    }
}

while(true){
    let num1 = Number(prompt('Enter first number:'))
    let opr = prompt('Enter operator(+,-,*,/): ')
    let num2 = Number(prompt('Enter second number:' ))
    let result
    
    if (opr === '+'){
        result = calculator.add(num1, num2)
    }
    else if (opr === '-'){
        result = calculator.sub(num1, num2)
    }
    else if (opr === '*'){
        result = calculator.mul(num1, num2)
    }
    else if (opr === '/'){
        result = calculator.div(num1, num2)
    }
    else{
        result = 'Invalid operator'
    }
    
console.log('Result is ',result)

let again = prompt('Play again?')
if (again === 'no' || again === 'NO'){
    break;
}

}





