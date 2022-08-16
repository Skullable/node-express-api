import express from "express";
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes )

mongoose
 .connect('mongodb+srv://Skullable:%40123123@cluster0.j3qumzt.mongodb.net/?retryWrites=true&w=majority')
 .then(() => {
 console.log('connected to DB!')})


app.get('/', (req, res) => 
res.send('Hello from hompage.'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))