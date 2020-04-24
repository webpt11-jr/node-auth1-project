// bring in express
const express = require('express');

// 
const usersRouter = require("./users/users-router.js");
const authRouter = require("./auth/auth-router.js");

// to hide the fact we're using express & for react app
const helmet = require('helmet');
const cors = require('cors');

// create server
const server = express()

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
// server.use(logger);

// 
server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

// test our endpoints
server.get('/', (req, res) => {
    res.send("junior's node auth1 project")
})

// custom event logger
// function logger(req, res, next){
//     console.log(`${req.method} Request`)
//     next();
// }

module.exports = server;