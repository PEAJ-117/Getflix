const {Router} = require("express")
const {addViewers, getViewers, sessionViewers, getViewersID, deleteViewersID, updateViewers, newPass} = require("../controllers/viewers")
const router = Router()

/*  http://localhost:3000/getflix/viewers  */

//POST
router.post("/",addViewers)
router.post("/login",sessionViewers)

// GET
router.get("/",getViewers)
router.get("/id/:id",getViewersID)

//DELETE
router.delete("/",deleteViewersID)

//PUT
router.put("/",updateViewers)
router.put("/nueva_contrasena",newPass)

module.exports = router