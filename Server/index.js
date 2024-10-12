import express from 'express';
import router from '/WebDesign/Server/Route/todos.js';  // Import the todos router

const app = express();
const port = 3001;

// Use the todos router with a '/api' prefix
app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
