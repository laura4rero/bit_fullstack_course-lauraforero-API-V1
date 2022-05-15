const express = require ('express');
const router = express.Router();


/*CRUD*/

router.post('/apiv1ToDo', (request, response) => {
    response.send('Crear un dato');
  });
  
  router.get('/apiv1ToDo', (request, response) => {
    response.send('leer un dato');
  });
  
  router.put('/apiv1ToDo', (request, response) => {
    response.send('Actualizar un dato');
  });
  
  router.delete('/apiv1ToDo', (request, response) => {
    response.send('Eliminar un dato');
  });

module.exports = router;