const express = require("express");
const info = require("./secrets.json");
const https = require("https");
const axios = require("axios");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3001;

let corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
};

let transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: info.mail,
        pass: info.pass
    }
});

app.post("/api", corsMiddleware, (req, res) => {
    console.log("tOp");
    // setup email data with unicode symbols
    let mailOptions = {
        from: "testing@test.com", // sender address
        to: "a.weigl1991@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("successfully sent");
    });
    res.json({
        success: true
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
