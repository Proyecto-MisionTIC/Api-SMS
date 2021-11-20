const router = require("express").Router()
const enviarCorreo = require("../models/noticaciones")
const correoEnviar = require("../models/noticaciones")
const enviarMensaje = require('../models/telefono')

router.get('/correo',(req,res) =>{

    res.send("OK")
    const nombre = req.query.nombre
    const correo = req.query.correo
    const mensaje = req.query.mensaje
    enviarCorreo(nombre,correo,mensaje)
})

router.get('/mensaje',(req,res) =>{
    res.send("Ok")
    const mensaje = req.query.mensaje
    const telefono = req.query.telefono
    enviarMensaje(mensaje,telefono)
})

module.exports = router