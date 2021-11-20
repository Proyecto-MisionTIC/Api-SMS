const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN

const client = require("twilio")(ACCOUNT_SID,AUTH_TOKEN);

function enviarMensaje(mensaje,telefono){
    client.messages.create({
        to: `+57${telefono}`,
        from: "+14092077972",
        body: mensaje
        
    }).then(messages => console.log("Mensaje Enviado"))
    .catch((error) => console.log(error))
    

}

module.exports = enviarMensaje