const { readFileSync, writeFileSync } = require('fs')

// const fs = require('fs')

// const first = fs.readFileSync('./content/first.txt', 'utf8')
// const second = fs.readFileSync('./content/second.txt', 'utf8')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first)
// console.log(second)

setInterval(() => {
    writeFileSync('./content/resultant.txt', `The final resultant of first.txt + second.txt is: ${first} | ${second} `, { flag: 'a' })
}, 1000)