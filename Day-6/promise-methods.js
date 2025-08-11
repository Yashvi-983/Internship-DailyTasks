// promise.all()

Promise.all([
    new Promise((resolve) => setTimeout(() => {
        resolve('Task 1 completed')
    }, 1000)),
    new Promise((resolve,reject) => setTimeout(() => {
        reject('Task 2 failed')
    }, 1000)),
])
.then((results) => console.log(results))
.catch((error) => console.error(error))

//promise.allSettled()

Promise.allSettled([
    Promise.resolve('Task 1 completed'),
    Promise.resolve('Task 2 completed'),
    Promise.reject('Task 3 failed')
])
.then((results)=> console.log(results))
.catch((error) => console.error(error))

//promise.race()

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => {
        reject('Task 1 failed')
    }, 1000)),
     new Promise((resolve) => setTimeout(() => {
        resolve('Task 2 completed')
    }, 1000)),
   
])
.then((results)=> console.log(results))
.catch((error) => console.error(error))

//promice.any()

Promise.any([
    Promise.reject('Task 1 failed'),
    Promise.reject('Task 2 failed'),
    Promise.reject('Task 3 failed')
])
.then((result) => console.log(result))
.catch((error) => console.error(error))

//promise.finally()
Promise.all([
    Promise.reject('Task failed'),
    Promise.resolve('Task completed')
])
.then((result) => console.log(result))
.catch((error) => console.error(error))
.finally(() => console.log('Finally completed'))

