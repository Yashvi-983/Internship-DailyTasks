const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let history = []
const userInput = () => {
    const input = rl.question('🎯 Enter number between 1 to 10: ', (result) => {
        if (result < 1 || result > 10 || result == '') {
            console.error('Invalid input! Please enter again.')
            userInput()
        } else {
            let num = new Set()
            while(num.size < 10) {
                num.add(Math.floor(Math.random() * 10) + 1)
            }
            const randomNum = [...num]
            
            console.log('Spinning...')

            randomNum.forEach((val, index) => {
                setTimeout(() => {
                    console.log(val)
                    if (index === randomNum.length - 1) {
                        console.log('✅ wheel stopped at :', randomNum[9])
                        if (result == randomNum[9]) {
                            let win = '🥳 You win!'
                            console.log(win)
                            history.push(win)

                        } else {
                            let lose = '😢 Better luck next time!'
                            console.log(lose)
                            history.push(lose)
                        }
                        if (history.length > 5) {
                            history.shift()
                            console.log(`🔄 Your game history:`)
                            history.forEach((item, index) => {
                                console.log(`${index + 1} : ${item}`)
                            })
                        } else {
                            console.log(`🔄 Your game history:`)
                            history.forEach((item, index) => {
                                console.log(`${index + 1} : ${item}`)
                            })
                        }

                        rl.question('❔ Do you wanna play again? ', (answer) => {
                            if (answer === 'yes') {
                                userInput()
                            }
                            else {
                                console.log('🤩 Thanks for playing')
                                rl.close()
                            }
                        })
                    }
                }, (index + 1) * 200)
            })
        }
    })
}
userInput()