const { request, response } = require("express");
const pool=require("../db/connection");
const modeloCinta = require("../models/cinta");
const modelMovies = require("../models/movies");

const getMovies = async(req=request,res=response)=>{
    let conn;
    try{
        conn = await pool.getConnection()
        const cinta = await conn.query(modelMovies.getMovies,(error)=>{throw new error})
        if(!cinta){
            res.status(404).json({msg:"No exiten registros"})
            return
        }
        res.json({cinta})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getMoviesID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [cinta]= await conn.query(modelMovies.getMoviesID,[id],(error)=>{throw new error})
        if(!cinta){
            res.status(404).json({msg:`No se encontraron resultados=${id}`})
            return
        }
        res.json({cinta})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteMoviesID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modelMovies.deleteMoviesID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No permitido para =${id}`})
            return
        }
        res.json({msg:`El =${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addMovies = async (req=request,res=response)=>{
    const {
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
    }=req.body

    if(
        !Nombre||
        !Sinopsis||
        !Duracion||
        !Anio||
        !Elenco||
        !Direccion||
        !Guion||
        !Clasificacion_edad||
        !Generos||
        !Idiomas||
        !Idiomas_Subtitulos||
        !Activo
    ){
        res.status(400).json({msg:"Falta información de la pelicula."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modelMovies.existMovies,[Nombre])
        if(user){
            res.status(403).json({msg:`La pelicula '${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modelMovies.addMovies,[
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
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar la pelicula ${Nombre}`})
            return
        }
        res.json({msg:`La pelicula ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const updateMovies = async (req=request,res=response)=>{
    const {
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
    }=req.body

    if(
        !Nombre
    ){
        res.status(400).json({msg:"Falta información de la pelicula."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [cinta]=await conn.query(modelMovies.infoMovies,[Nombre])

        if(!cinta){
            res.status(403).json({msg:`La pelicula'${Nombre}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(modelMovies.updateMovies,[
            Sinopsis||cinta.Sinopsis,
            Duracion||cinta.Duracion,
            Anio||cinta.Anio,
            Elenco||cinta.Elenco,
            Direccion||cinta.Direccion,
            Guion||cinta.Guion,
            Clasificacion_edad||cinta.Clasificacion_edad,
            Generos||cinta.Generos,
            Idiomas||cinta.Idiomas,
            Idiomas_Subtitulos||cinta.Idiomas_Subtitulos,
            Activo||cinta.Activo,
            Nombre||cinta.Nombre
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No puedo actualizar los datos ${Nombre}`})
            return
        }
        res.json({msg:`La pelicula con el nombre ${Nombre} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports={getMovies,getMoviesID, deleteMoviesID, addMovies, updateMovies}