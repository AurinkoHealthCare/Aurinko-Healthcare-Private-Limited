require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./Routing/Router');
const PORT = process.env.PORT || 6001;

require('./Model/db');

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  }
  console.log(`Server is running on port ${PORT}`);
});