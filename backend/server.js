// const express = require('express'); // traditional method

import express from 'express'; // ES Method
import {connectDB} from './config/db.js'
import productRoutes from './routes/products.routes.js'
import path from "path"

const app = express();
const PORT = 5000;
const __dirname = path.resolve();
app.use(express.json()); // this allows us to accept the json file and it will works as a middleware

app.use("/api/products",productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    // });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on localhost:"+PORT);
})


// C8WfjXp2zsGxFgfU