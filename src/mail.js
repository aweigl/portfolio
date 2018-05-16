import React from "react";
import axios from "axios";

class Mail extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.sendMail = this.sendMail.bind(this);
    }
    async sendMail() {
        const response = await axios.post("http://localhost:3001/api");

        if (!response.data.success) {
            console.log("No success");
        }
        console.log("success");
        {
            /*response.data.success : console.log("success") ? console.log("No success");*/
        }
    }
    render() {
        return (
            <div className="Mail">
                <input className="mailName" />
                <input className="mailSubject" />
                <textarea className="mailMessage" />
                <button onClick={this.sendMail}>SEND MAIL</button>
            </div>
        );
    }
}

export default Mail;
