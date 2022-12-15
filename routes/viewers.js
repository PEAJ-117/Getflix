const {Router} = require("express")
const {agregarViewers, sessionViewers} = require("../controllers/viewers")
const router = Router()

//http://localhost:3000/getflix/viewers

//POST
router.post("/",agregarViewers)
router.post("/login",sessionViewers)

module.exports = router