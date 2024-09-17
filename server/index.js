import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import jobsheet from './routes/jobSheet.js';
const app = express();
dotenv.config();

const port = process.env.PORT || 7000;
const mongoUrl = process.env.MONGO_URL;

//Body parser MiddleWare
app.use(bodyParser.json());
app.use('/job', jobsheet);

mongoose.connect(mongoUrl).then(() => {
    console.log("Data base connected")
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})