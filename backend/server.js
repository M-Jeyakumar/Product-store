// const express = require('express'); // traditional method

import express from 'express'; // ES Method
import {connectDB} from './config/db.js'
import productRoutes from './routes/products.routes.js'

const app = express();

app.use(express.json()); // this allows us to accept the json file and it will works as a middleware

app.use("/api/products/",productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server is listening on port 5000...");
})


// C8WfjXp2zsGxFgfU