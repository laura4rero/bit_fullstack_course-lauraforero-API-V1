const express = require ('express');
const router = express.Router();
const ToDoSchema = require ('../Models/ToDo');


/*CRUD*/

router.post('/apiv1ToDo', (request, response) => {
  //console.log("peticion", request.body);
  const newTodo = ToDoSchema(request.body);
  newTodo
  .save()
  .then((data) => response.json({ success: data }))
  .catch((err) => response.json({ failured: err }));

  //response.send( request.body);
  });
  
  router.get('/apiv1ToDo', (request, response) => {
    ToDoSchema
    .find(request.body)
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
    //response.send('leer un dato');
  });
  
  router.put('/apiv1ToDo', (request, response) => {
    ToDoSchema
    .updateOne(request.body)
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
    //response.send('Actualizar un dato');
  });
  
  router.delete('/apiv1ToDo', (request, response) => {
    ToDoSchema
    .deleteOne(request.body)
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
    //response.send('Eliminar un dato');
  });

module.exports = router;