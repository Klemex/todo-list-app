import express from 'express';  // Import express
const router = express.Router(); // Create a router instance

// GET all todos
router.get('/todos', (req, res) => {
  res.send('All Todos');
});


router.get('/todos/:id', (req, res) => {
  const id = req.params.id;  // Grab the id parameter from the URL
  res.send(`Getting TODO with id ${id}`);
});


router.post('/todos', (req, res) => {
  const newTodo = {
    id: 1,
    title: 'Todo',
    description: 'My todo'
  };
  res.json(newTodo);  // Send a response object as JSON
});

// PUT to update a todo by id
router.put('/todos/:id', (req, res) => {
  const id = req.params.id;  // Grab the id parameter from the URL
  res.send(`Updating TODO with id ${id}`);
});

// DELETE a todo by id
router.delete('/todos/:id', (req, res) => {
  const id = req.params.id;  
  res.send(`Deleting TODO with id ${id}`);
});


export default router;
