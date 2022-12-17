const express = require('express')
const cors = require("cors")
const viewersRouter = require('./routes/viewers')
const moviesRouter = require('./routes/movies')
const favRouter = require('./routes/fav')


class Server{
    constructor(){
        this.app = express()
        this.paths ={
            viewers:"/getflix/viewers",
            movies: "/getflix/movies",
            fav: "/getflix/fav"
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
        this.app.use(this.paths.movies, moviesRouter)
        this.app.use(this.paths.fav, favRouter)
    }
    
    middlewares(){
        this.app.use(cors()) 
        this.app.use(express.json())
    }
}

module.exports = Server