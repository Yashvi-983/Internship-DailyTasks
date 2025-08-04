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
const Menu = () => {
    return prompt(`
        Choose Operation
        1. Create
        2. Read
        3. Update
        4. Delete
    `)
}
const createTask = () => {
    var taskName = prompt('Enter Task Name: ')
    var taskDesc = prompt('Enter Task Description: ')
    var start_date = prompt('Enter Starting Date: ')
    var end_date = prompt('Enter Ending Date: ')
    
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
    alert(`Task created ! Id: ${task.id}`)
    runTask()
    readTask()
}

const readTask = () => {
    var id = parseInt(prompt('Enter your ID: '))
    const task = tasks.find((e) => e.id === id)
    if(task){
        console.log(`Task Name is: ${task.taskName},\nTask Description is: ${task.taskDesc},\nTask Start Date is: ${task.start_date},\nTask End Date is: ${task.end_date}`)
    }
}

const updateTask = () => {
    const id = parseInt(prompt('Enter ID:'))
    const task = tasks.find((e)=> e.id === id)
    
    if(task){
       let newname = prompt('Enter new Task Name: ', task.taskName)
       let newdesc = prompt('Enter new Task Description: ', task.taskDesc)
       let new_start_date = prompt('Enter new Task Start Date: ', task.start_date)
       let new_end_date = prompt('Enter new Task Name: ', task.end_date)
       
       task.taskName = newname || task.taskName
       task.taskDesc = newdesc || task.taskDesc
       task.start_date = new_start_date || task.start_date
       task.end_date = new_end_date || task.end_date
       alert('Task updated!')
    } else {
        alert('task id not found')
    }
    
}
const deleteTask = () => {
    const id = parseInt(prompt('Enter ID:'))
    const index = tasks.findIndex((e)=> e.id === id)
    
    if(index != -1){
        tasks.splice(index, 1)
        console.log('Task Deleted Successfully!!')
    }else{
        console.log('ID not found')
    }
}

const runTask = () => {
    let choice;
    do {
        choice = Menu()
        switch(choice){
            case '1':
                createTask()
                break;
            case '2':
                readTask()
                break;
            case '3':
                updateTask()
                break;
            case '4':
                deleteTask()
                break;
            default:
                console.log('Invalid operation')
                break;
        } 
    } while(['1','2','3','4'].includes(choice))
}
runTask()

