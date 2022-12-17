const modelFav = {
    getFav: "SELECT * FROM coleccion c  JOIN temporada t  WHERE (c.ID  = t.ID_coleccion)",
    getFavID : `SELECT * FROM cinta WHERE ID=?`,
    deleteFavID : `UPDATE coleccion SET Activo='N' WHERE ID=?`,
    deleteSeasonID : `UPDATE temporada SET Activo_Temporada='N' WHERE ID_Temporada=?`,
    existFav : `SELECT Nombre FROM coleccion WHERE Nombre = ?`,
    addFav:`
    INSERT INTO coleccion(
        Nombre,
        Sinopsis,
        Anio,
        Elenco,
        Creado,
        Clasificacion_edad,
        Generos,
        Activo
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`
}


module.exports = modelFav