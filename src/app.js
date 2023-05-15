const express = require("express");
const http = require("http")
require("./dao/dbConnection")
const adminRouter=require("./api/admin/index")
const bookRouter=require("./api/book/index")
const userRouter=require("./api/user/index")


const app = express()
const server = http.createServer(app)
const port = 9000 | process.env.PORT
const ip ="localhost"

app.use(express.json())
app.use(adminRouter)
app.use(bookRouter)
app.use(userRouter)


server.listen(port,ip,()=>{
    console.log("server listening on http://%s:%d",ip,port);
})

