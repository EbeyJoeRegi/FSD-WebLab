// Import the necessary modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port number
const port = 1337;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

