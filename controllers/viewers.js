const { request, response } = require("express");
const bcryptjs=require("bcryptjs")
const pool=require("../mariadb/db_conn");
const modeloViewers = require("../models/viewers.js");

// Registro de clientes, usuarios o espectadores
const addViewers = async (req=request,res=response)=>{
    const {
        Correo,
        Contrasena,
        Telefono,
        Forma_Pago,
        Plan,
        Fecha_Facturacion,
        Plan_Activo,
        Activo
    } = req.body
    if(
        !Correo||
        !Contrasena||
        !Forma_Pago||
        !Plan||
        !Fecha_Facturacion||
        !Plan_Activo||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }let conn;
    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloViewers.viewerExist,[Correo])
        if(user){
            res.status(403).json({msg:`El cliente con el correo '${Correo}' ya se encuentra registrado.`})
            return
        }
        const salt = bcryptjs.genSaltSync()
        const contrasenaCifrada = bcryptjs.hashSync(Contrasena,salt) 
        const {affectedRows} = await conn.query(modeloViewers.addViewers,[
            Correo,
            contrasenaCifrada,
            Telefono || '999999999',
            Forma_Pago,
            Plan,
            Fecha_Facturacion,
            Plan_Activo,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del cliente ${Correo}`})
            return
        }
        res.json({msg:`El cliente con el correo ${Correo} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

// Ver a los usuarios
const getViewers = async(req=request,res=response)=>{
    let conn;
    try{
        conn = await pool.getConnection()
        const cliente = await conn.query(modeloViewers.getViewers,(error)=>{throw new error})
        if(!cliente){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({cliente})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports = {addViewers, getViewers}