require('dotenv').config({path: './config.env'});
const express = require('express');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect DB
connectDb();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth')); //redirects all api/auth
app.use('/api/protected', require('./routes/protected'));
app.use('/api/users', require('./routes/users'));

// Error handler (should be last of the middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Backend listening to http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});
