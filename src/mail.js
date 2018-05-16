import React from "react";
import axios from "axios";

class Mail extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.sendMail = this.sendMail.bind(this);
    }
    async sendMail() {
        let message = {
            name: this.name.value,
            mail: this.mail.value,
            subject: this.subject.value,
            message: this.message.value
        };
        const response = await axios.post("http://localhost:3001/api", message);

        if (!response.data.success) {
            console.log("No success");
        }
        console.log("success");
    }
    render() {
        return (
            <div className="Mail">
                <div className="inputContainer">
                    <div className="mailGreeting">
                        <div>SIE MOECHTEN MIT UNS IN KONTAKT TRETEN?</div>
                        <div>SCHICKEN SIE UNS GERNE EINE E-MAIL</div>
                    </div>
                    <div className="secondInputContainer">
                        <div className="mailName">
                            <input
                                ref={name => {
                                    this.name = name;
                                }}
                                placeholder="Name"
                                className="mailUserName"
                            />
                        </div>
                        <div className="eMail">
                            <input
                                ref={mail => {
                                    this.mail = mail;
                                }}
                                placeholder="E-mail Adresse"
                                className="mailInput"
                            />
                        </div>
                        <div className="mailSubject">
                            <input
                                ref={subject => (this.subject = subject)}
                                placeholder="Anliegen"
                                className="mailInput"
                            />
                        </div>
                        <div className="textarea">
                            <textarea
                                ref={message => {
                                    this.message = message;
                                }}
                                placeholder="Nachricht"
                                className="mailMessage"
                            />
                        </div>
                        <div className="mailButton">
                            <button onClick={this.sendMail}>SEND MAIL</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mail;
