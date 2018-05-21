const express = require("express");
if (process.env.PASS) {
    const mail = process.env.MAIL;
    const pass = process.env.PASS;
}
const info = require("./secrets.json");
const mail = info.mail;
const pass = info.pass;

const https = require("https");
const axios = require("axios");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

let corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
};

let transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: mail,
        pass: pass
    }
});

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post("/api/mail", corsMiddleware, (req, res) => {
    console.log(req.body);
    let mailOptions = {
        to: "a.weigl1991@gmail.com", // list of receivers
        subject: `${req.body.subject}`, // Subject line
        text: `${req.body.message} gesendet von ${req.body.name}
        ${req.body.mail} um ${new Date()}` // plain text body
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
    res.sendStatus(200);
});
app.listen(port, () =>
    console.log(`Listening on port ${port}, ${process.env.PASS}`)
);
