const express = require('express');

const server = express();
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const logger = require("./middleware/logger");
const cors = require('cors');

server.use(express.json());
server.use(cors());
server.use(logger());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


module.exports = server;
