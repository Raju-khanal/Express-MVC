const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");

// 1. JSON parser FIRST
app.use(express.json());

// 2. THEN custom middleware
const { Middleware } = require("./middlewares");
app.use(Middleware());

// 3. Routes AFTER middleware
app.use("/api/user", userRouter);

connectMongoDb("mongodb://127.0.0.1:27017/myDB");

app.listen(3000, () => {
    console.log("server is running well");
});