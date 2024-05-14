const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const subscribersRoutes = require("./routes/subscribersRoutes");
const { json } = require("body-parser");
const DB = process.env.DATABASE;
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful!");
    })
    .catch((err) => {
        console.error("DB connection failed:", err);
    });
app.use(express.json());
app.use("/subscribers", subscribersRoutes);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});