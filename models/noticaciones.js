require("dotenv").config()


const sgMail = require('@sendgrid/mail')

function enviarCorreo(nombre,correo,mensaje) {
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: correo,
    from: 'registropacientes687@gmail.com',
    subject: 'Registro Personas',
    text: mensaje
  
}
    sgMail.send(msg)
    .then(() => {console.log('Correo Enviado')})
    .catch((error) => {console.error(error)})    
}


module.exports = enviarCorreo