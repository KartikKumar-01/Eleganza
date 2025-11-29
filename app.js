const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require('express-session');
const flash = require('connect-flash');
const db = require('./config/mongoose-connection');
const adminRouter = require('./routes/admin-routes');
const userRouter = require('./routes/user-routes');
const productRouter = require('./routes/product-routes');
const indexRouter = require('./routes/index-routes')

require('dotenv').config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash());

// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     next();
// });


app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/products', productRouter);

app.listen(3000);
