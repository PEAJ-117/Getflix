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
    getViewers: "SELECT * FROM viewers",
    getViewersID : `SELECT * FROM clientela WHERE ID=?`,
    sessionViewers : `SELECT Correo, Contrasena, Activo FROM viewers WHERE Correo = ?`,
    infoViewers : `SELECT Correo,Contrasena,Telefono,Forma_Pago,Plan,Fecha_Facturacion,Plan_Activo,Activo FROM viewers WHERE Correo = ?`,
    eliminarClientelaID : `UPDATE clientela SET Activo='N' WHERE ID=?`,
    updateViewers : `UPDATE clientela SET Telefono=?, Forma_Pago=?, Plan=?, Fecha_Facturacion=?, Plan_Activo=?, Activo=? WHERE Correo= ?`,
    upPass : `UPDATE clientela SET Contrasena=? WHERE Correo= ?`
}

module.exports = modeloViewers