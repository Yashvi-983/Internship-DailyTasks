// function simplefun() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Resolved')
//         }, 2000);
//     })
// }

// async function asyncCall(){
//     console.log('Calling...')
//     const value = await simplefun()
//     console.log(value)
// }

// asyncCall()

const run = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/18')
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error(error)
    }
}
run()

