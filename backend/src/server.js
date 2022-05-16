const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ToDorouter = require ('./routes/ToDo');

const server = express();
const port = 4000;

//server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(ToDorouter);

dotenv.config();

mongoose
.connect(process.env.MONGOCONNECT)
.then(() => console.log('Conectado a la base de datos'))
.catch((err) =>
  console.log('Error al conectar a la base de datos, error: ' + err)
);

server.get('/', (request, response) => {
  response.send('Hola desde la raíz');
});

server.listen(port, () => {
  console.log(`Servidor corriendo en localhost, en el puerto ${port}`);
});