function asyncfun1(callback){
    setTimeout(() => {
        console.log('Async Funtion1')
        callback()
    }, 2000);
}

function asyncfun2(callback){
    setTimeout(() => {
        console.log('Async Function2')
        callback()
    }, 2000);
}

function asyncfun3(callback){
    setTimeout(() => {
        console.log('Async Function3')
        callback()
    }, 2000);
}

asyncfun1(() => {
    asyncfun2(() => {
        asyncfun3(() => {
            console.log('All functions completed...')
        })
    })
})