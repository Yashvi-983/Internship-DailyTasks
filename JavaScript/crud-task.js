const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
    
function askQuestion(answer){
    return new Promise((resolve) => {
        rl.question(answer, resolve)
    })
}

let tasks = []
let taskIdCounter = 1;

const GetTodayDate = () => {
    return new Date().toISOString().split("T")[0]
}

const GetTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
}
const Menu = async() => {
    console.log(`Choose Operation
        1. Create
        2. Read
        3. Update
        4. Delete`)

const choice =  await askQuestion('Enter your Choice : ')
    switch(choice.trim()){
        case '1':
            await createTask()
            break;
        case '2':
            await readTask()
            break;
        case '3':
            await updateTask()
            break;
        case '4':
            await deleteTask()
            break;
        default:
            console.log('Invalid operation')
            rl.close()
            return;
    } 
    Menu()   
}

const createTask = async () => {
    let taskName =  await askQuestion('Enter Task Name: ')
    let taskDesc =  await askQuestion('Enter Task desc: ')
    let start_date = await askQuestion('Enter start date: ')
    let end_date = await askQuestion('Enter end date: ')

    
    if(!start_date){
        start_date = GetTodayDate()
        console.log('Start date is: ',start_date)
    } 
    if(!end_date){
        end_date = GetTomorrowDate()
        console.log('End date is: ',end_date)
    }
    
    const task = {
        id:taskIdCounter++,
        taskName,
        taskDesc,
        start_date, 
        end_date
    }
    tasks.push(task)
    
}

const readTask = async () => {
    const id =  parseInt(await askQuestion('Enter your id: '))
    const task = tasks.find((e) => e.id === id)
    if(task){
        console.log(`Task Name is: ${task.taskName},\nTask Description is: ${task.taskDesc},\nTask Start Date is: ${task.start_date},\nTask End Date is: ${task.end_date}`)
    } else {
        console.log('ID not found')
    }
}

const updateTask = async () => {
    let id =  parseInt(await askQuestion('Enter your id: '))
    const task = tasks.find((e)=> e.id === id)
    
    if(task){
        let newname =  await askQuestion('Enter new Task Name: ')
        let newdesc =  await askQuestion('Enter new Task desc: ')
        let new_start_date = await askQuestion('Enter new Start date: ')
        let new_end_date = await askQuestion('Enter new End date: ')
       
       task.taskName = newname || task.taskName
       task.taskDesc = newdesc || task.taskDesc
       task.start_date = new_start_date || task.start_date
       task.end_date = new_end_date || task.end_date
       console.log('Task updated!')
    } else {
        console.log('task id not found')
    }
    
}
const deleteTask = async () => {
    let id =  parseInt(await askQuestion('Enter your id: '))
    const index = tasks.findIndex((e)=> e.id === id)
    
    if(index != -1){
        tasks.splice(index, 1)
        console.log('Task Deleted Successfully!!')
    }else{
        console.log('ID not found')
    }
}
Menu()