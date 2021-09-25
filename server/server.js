require('dotenv').config({path: './config.env'});
const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth')); //redirects all api/auth

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend listening to http://localhost:${PORT}`);
});
