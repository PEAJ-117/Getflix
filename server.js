const express = require('express')
const cors = require("cors")
const viewersRouter = require('./routes/viewers')


class Server{
    constructor(){
        this.app = express()
        this.paths ={
            viewers:"/getflix/viewers",
        }
        this.middlewares()
        this.routes()
    }
    
    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Sistema ejecutandose hacia el puerto", process.env.PORT)
        })
    }

    routes(){      
        this.app.use(this.paths.viewers, viewersRouter)
    }
    
    middlewares(){
        this.app.use(cors()) 
        this.app.use(express.json())
    }
}

module.exports = Server