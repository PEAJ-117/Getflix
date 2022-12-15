const {Router} = require("express")
const {addViewers, getViewers} = require("../controllers/viewers")
const router = Router()

/*  http://localhost:3000/getflix/viewers  */

//POST
router.post("/",addViewers)

// GET
router.get("/",getViewers)

module.exports = router