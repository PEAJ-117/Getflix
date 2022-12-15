const modeloViewers = {
    consultaViewers: "SELECT * FROM viewers",
    consultaViewersID : `SELECT * FROM viewers WHERE ID=?`,
    eliminarViewersID : `UPDATE viewers SET Activo='N' WHERE ID=?`,
    clienteExiste : `SELECT Correo FROM viewers WHERE Correo = ?`,
    agregarViewers:
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
    sessionViewers : `SELECT Correo, Contrasena, Activo FROM viewers WHERE Correo = ?`,
    infoViewers : `SELECT Correo,Contrasena,Telefono,Forma_Pago,Plan,Fecha_Facturacion,Plan_Activo,Activo FROM viewers WHERE Correo = ?`
}

module.exports = modeloViewers