import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());
dotenv.config();
// MY IMPORTS
import dataBaseConnection from './dbConnection/connection.js';
import create from './routes/create.js';
dataBaseConnection();

// CRUD operations
app.use('/upload', create);
app.use('/retrieve', create);
app.use('/delete', create);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});