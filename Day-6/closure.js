// function outer (a){
//     let b = 20;

//     return function(){
//         let sum = a + b
//         return sum
//     }
// }

// // outer(10)
// const add = outer(10)
// console.log(add())


function outer(a){
    let b = 20

    function inner(){
        let sum = a + b
        console.log(sum)
    }
    inner()
}

outer(5)
