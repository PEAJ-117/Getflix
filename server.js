const express = require('express')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
    }
    
    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Sistema ejecutandose hacia el puerto", process.env.PORT)
        })
    }
}

module.exports = Server