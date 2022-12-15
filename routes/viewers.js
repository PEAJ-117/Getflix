const {Router} = require("express")
const {agregarViewers} = require("../controllers/viewers")
const router = Router()

//http://localhost:3000/getflix/viewers

//POST
router.post("/",agregarViewers)

module.exports = router