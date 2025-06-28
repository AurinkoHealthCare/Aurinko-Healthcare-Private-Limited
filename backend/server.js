require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const router = require('./Routing/Router');
const PORT = process.env.PORT || 6001;

require('./Model/db');

app.use(cors());
app.use(express.json());

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, './dist')));

// Root route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use('/api', router);

// Catch-all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  }
  console.log(`Server is running on port ${PORT}`);
});