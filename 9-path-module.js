const { test } = require('node:test')
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(`path.join output is Filepath: ${filePath}`)

const base = path.basename(filePath)
console.log(`path.basename output is: ${base}`)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(`path.resolve using __dirname is : ${absolute}`)