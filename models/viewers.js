const modeloViewers = {
    
    viewerExist :
    `SELECT Correo FROM viewers WHERE Correo = ?`,
    
    addViewers:
    `INSERT INTO viewers(
        Correo,
        Contrasena,
        Telefono,
        Forma_Pago,
        Plan,
        Fecha_Facturacion,
        Plan_Activo,
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
    )`,

    getViewers: "SELECT * FROM viewers"
}

module.exports = modeloViewers