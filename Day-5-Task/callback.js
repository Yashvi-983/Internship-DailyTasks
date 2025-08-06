//callback function
function perform(c, a){
    console.log('Performing callback')
    c()
    a()
}
function hello(){
    console.log('hello')
}
function callbackfunction(){
    console.log('Executing callback...')
}

perform(hello, callbackfunction)
