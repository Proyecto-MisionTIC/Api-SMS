const router = require("express").Router()
const enviarCorreo = require("../models/noticaciones")
const correoEnviar = require("../models/noticaciones")
const enviarMensaje = require('../models/telefono')

require("dotenv").config()


const sgMail = require('@sendgrid/mail')
router.get('/correo',(req,res) =>{

    const nombre = req.query.nombre
    const correo = req.query.correo
    const mensaje = req.query.mensaje
    //enviarCorreo(nombre,correo,mensaje)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: correo,
    from: 'registropacientes687@gmail.com',
    subject: 'Registro Personas',
    text: mensaje
  
}
    sgMail.send(msg).then(() => res.send("Ok")).catch((error) => res.send({ERROR: error}))
    
})

router.get('/mensaje',(req,res) =>{

    const mensaje = req.query.mensaje
    const telefono = req.query.telefono
    enviarMensaje(mensaje,telefono)
})

module.exports = router