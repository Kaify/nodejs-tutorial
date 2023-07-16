const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page of Nodejs-Project1')
    }
    if (req.url === '/about') {
        res.end('This is our about page')
    }

    res.end(`
    <h1> Oops! error 400 </h1 >
    <p> We can't seem to find the page you are looking for </p>
    <a href="/"> Return back to Home </a>
    
    `)
})

server.listen(5000)