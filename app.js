const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require('./config/mongoose-connection');
const adminRouter = require('./routes/admin-routes');
const userRouter = require('./routes/user-routes');
const productRouter = require('./routes/product-routes');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(3000);
