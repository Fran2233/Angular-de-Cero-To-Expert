const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

console.log(process.env);




// crear server d express

const app=express();


// base de datos
dbConnection();


//directorio publico

app.use(express.static('public'));






//cors

app.use( cors());


//lectura y parseo del body
app.use(express.json())

//rutas
app.use( '/api/auth', require('./routes/auth') );


app.listen(process.env.PORT, () =>{
    console.log(`Server Encendido!!! en puerto ${process.env.PORT}`)
});




