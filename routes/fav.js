const {Router} = require("express")
const { getFav, addFav, deleteFavID, deleteSeasonID } = require("../controllers/fav")
const router = Router()

/* http://localhost:3000/getflix/fav */

//GET
router.get("/", getFav)

//DELETE
router.delete("/eliminarcoleccion/",deleteFavID)
router.delete("/eliminartemporada/",deleteSeasonID)

//POST
router.post("/agregarcoleccion/",addFav)

module.exports = router