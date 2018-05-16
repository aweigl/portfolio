const express = require("express");
const info = require("./secrets.json");
const https = require("https");
const axios = require("axios");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

let corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post("/api", corsMiddleware, (req, res) => {
    console.log(req.body);
    let mailOptions = {
        to: "a.weigl1991@gmail.com", // list of receivers
        subject: `${req.body.subject}`, // Subject line
        text: `${req.body.message} send by ${req.body.name}/${
            req.body.mail
        } at ${new Date()}` // plain text body
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

app.options("/api", corsMiddleware, (req, res, next) => {
    console.log("options logging");
    res.sendStatus(200);
});
app.listen(port, () => console.log(`Listening on port ${port}`));