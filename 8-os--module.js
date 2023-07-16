// Progress - followed till 1:18:38 - need to relook at Path module, read file and write file sync
const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

// method returns system up time

console.log(` The system up time is ${os.uptime / (60 * 60)} hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem()
}

console.log(currentOS)