const express = require("express");
require("dotenv").config(); // configuro mi servidor para usar variable de entorno
const connectDB = require('./src/utils/db_mongo');
const routerUser = require('./src/api/routers/user.router')
connectDB();

const server = express();
server.use(express.json());

const PORT = process.env.PORT;


server.use("/", routerUser);

server.listen(process.env.PORT, ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

