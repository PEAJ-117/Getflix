const modelMovies = {
    getMovies: "SELECT * FROM movies",
    getMoviesID : `SELECT * FROM movies WHERE ID=?`,
    deleteMoviesID : `UPDATE movies SET Activo='N' WHERE ID=?`,
    existMovies : `SELECT Nombre FROM movies WHERE Nombre = ?`,
    addMovies:
    `INSERT INTO movies(
        Nombre,
        Sinopsis,
        Duracion,
        Anio,
        Elenco,
        Direccion,
        Guion,
        Clasificacion_edad,
        Generos,
        Idiomas,
        Idiomas_Subtitulos,
        Activo
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    infoMovies : `SELECT Nombre,Sinopsis,Duracion,Anio,Elenco,Direccion,Guion,Clasificacion_edad,Generos,Idiomas,Idiomas_Subtitulos,Activo FROM movies WHERE Nombre = ?`,
    updateMovies : `
    UPDATE movies SET
        Sinopsis=?,
        Duracion=?,
        Anio=?,
        Elenco=?,
        Direccion=?,
        Guion=?,
        Clasificacion_edad=?,
        Generos=?,
        Idiomas=?,
        Idiomas_Subtitulos=?,
        Activo=?
    WHERE Nombre= ?
    `
}

module.exports=modelMovies