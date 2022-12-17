const { request, response } = require("express");
const pool=require("../mariadb/db_conn");
const modelFav = require("../models/fav");

const getFav = async(req=request,res=response)=>{
    let conn;
    try{
        conn = await pool.getConnection()
        const coleccion = await conn.query(modelFav.getFav,(error)=>{throw new error})
        if(!coleccion){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({coleccion})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteFavID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modelFav.deleteFavID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar la serie con el ID=${id}`})
            return
        }
        res.json({msg:`La serie con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteSeasonID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modelFav.deleteSeasonID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar la temporada con el ID=${id}`})
            return
        }
        res.json({msg:`La temporada con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addFav = async (req=request,res=response)=>{
    const {
        Nombre,
        Sinopsis,
        Anio,
        Elenco,
        Creado,
        Clasificacion_edad,
        Generos,
        Activo
    }=req.body

    if(
        !Nombre||
        !Sinopsis||
        !Anio||
        !Elenco||
        !Creado||
        !Clasificacion_edad||
        !Generos||
        !Activo
    ){
        res.status(400).json({msg:"Falta información de la serie."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modelFav.existFav,[Nombre])
        if(user){
            res.status(403).json({msg:`La serie '${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modelFav.addFav,[
            Nombre,
            Sinopsis,
            Anio,
            Elenco,
            Creado,
            Clasificacion_edad,
            Generos,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar la serie ${Nombre}`})
            return
        }
        res.json({msg:`La serie ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports={getFav, deleteFavID, deleteSeasonID, addFav} 