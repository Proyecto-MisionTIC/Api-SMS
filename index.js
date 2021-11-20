const express = require("express")
const router = require("./routes/routerNotifacion.js")


const app = express();
const port = 7000;

app.use(express.json());
app.use('/api',router);


app.get('/',(req,res) =>{
    res.send("Api Empleados");
});


app.listen(port,() => console.log("Servidor activo en el puerto ", port));
