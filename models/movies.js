const modelMovies = {
    getMovies: "SELECT * FROM cinta",
    getMoviesID : `SELECT * FROM cinta WHERE ID=?`,
    deleteMoviesID : `UPDATE cinta SET Activo='N' WHERE ID=?`,
    existMovies : `SELECT Nombre FROM cinta WHERE Nombre = ?`,
    addMovies:
    `INSERT INTO cinta(
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
    infoMovies : `SELECT Nombre,Sinopsis,Duracion,Anio,Elenco,Direccion,Guion,Clasificacion_edad,Generos,Idiomas,Idiomas_Subtitulos,Activo FROM cinta WHERE Nombre = ?`,
    updateMovies : `
    UPDATE cinta SET
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