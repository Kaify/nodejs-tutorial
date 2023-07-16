const { readFile, writeFile } = require('fs')

console.log('Starting')

readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }

    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }

        const second = result
        var cntr = 0
        setInterval(() => {
            writeFile('./content/result-writeFile.txt', `The result of async read and write is : ${first} | ${second}`, { flag: 'a' }, (err, result) => {

                cntr = cntr + 1
                console.log(`Done with the write task: ${cntr} `)
            })
        }, 1000)

    })
})

console.log('Ready for next task')

setInterval(() => {

    console.log('Hello World')
}, 500)