const { error } = require('console')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({input: process.stdin , output: process.stdout})
function askQuestion(answer){
    return new Promise((resolve) => {
        rl.question(answer, resolve)
    })
}

const Menu = async () => {
    console.log(`Choose Operation:
        1. Create File
        2. Read File
        3. Update File
        4. Delete File\n`)

    let choice = await askQuestion('Enter your choice: ')
    switch(choice){
        case '1':
            await createFile()
            break;
        case '2':
            await readFile()
            break
        case '3':
            await updateFile()
            break
        case '4':
            await deleteFile()
            break
        default:
            console.log('Invalid Operation')
            rl.close()
            return
    }
}

const createFile = async () => {
    let filename = await askQuestion('Enter File Name: ')
    let ext = await askQuestion('Enter extension: ') 
    let validext = ['.txt', '.json', '.html', '.css', '.js', '.jsx']

    if(!validext.includes(ext)){

        console.error('Invalid Extension!')
        let newExt =  await askQuestion('Enter Extension again: ')
        ext = newExt
        
        let merge = filename + ext
        let filedata = await askQuestion('Enter File Data: ')

        fs.writeFile(merge, filedata, 'utf-8', (err, data) => {
            console.log('File created successfully!! ')
            return Menu() 
        })
    } else if(validext.includes(ext)){
        let merge = filename + ext
        let filedata = await askQuestion('Enter File Data: ')

        fs.writeFile(merge, filedata, 'utf-8', (err, data) => {
            console.log('File created successfully!! ')
            return Menu()
        })
    }
}


const readFile = async () => {
    let fileread = await askQuestion('Enter File Name: ')

    fs.readFile(fileread, 'utf-8', (err, data) => {
        if(err){
            console.error("File Doesn't exist")
        } else{
            console.log('File Data: ', data)
        }
        return Menu()
    })
}

const updateFile = async () => {
    let filename = await askQuestion('Enter File Name to Update: ')
    let updatedData = await askQuestion('Enter Data to update: ')

    fs.appendFile(filename, updatedData, 'utf-8', (err) => {
        console.log('Data Updated successfully!!')
        return Menu()
    })
}

const deleteFile = async () => {
    let filename = await askQuestion('Enter File Name to Delete: ')

    fs.unlink(filename, (err) => {
        if(err){
            console.error("File doesn't exist.")
        } else {
            console.log('File deleted successfully!!')
        }
        return Menu()
    })
    
}
Menu()


