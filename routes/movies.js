const {Router} = require("express")
const { addMovies, getMovies, getMoviesID, deleteMoviesID, updateMovies } = require("../controllers/movies")
const router = Router()

/* http://localhost:3000/getflix/movies */

//GET
router.get("/", getMovies)
router.get("/id/:id", getMoviesID)

//DELETE
router.delete("/",deleteMoviesID)

//POST
router.post("/",addMovies)

//PUT
router.put("/",updateMovies)


module.exports = router