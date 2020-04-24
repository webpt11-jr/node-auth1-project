// import our express server
const server = require('./server')

// set listening port
server.listen(5006, () => {
    console.log('server is running on port 5006')
})

