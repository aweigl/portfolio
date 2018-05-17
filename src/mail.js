import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        const response = await axios.post(
            "http://192.168.50.155:3001/api",
            message
        );

        if (!response.data.success) {
            console.log("No success");
        }
        this.setState({
            mailSent: true
        });
    }
    render() {
        return (
            <div className="Mail" id="modal">
                {this.state.mailSent && (
                    <div className="modalBG">
                        <div className="confirmModal">
                            <p>
                                Ihre Mail wurde erfolgreich versendet! Wir
                                melden uns schnellstmöglich bei Ihnen.
                            </p>
                            <Link
                                to="/"
                                onClick={() => {
                                    this.setState({
                                        mailSent: false
                                    });
                                }}
                            >
                                OK
                            </Link>
                        </div>
                    </div>
                )}
                <div className="inputContainer">
                    <div className="mailGreeting">
                        <div className="greeting1">KONTAKT</div>
                    </div>
                    <div className="secondInputContainer">
                        <div className="inputPicture">
                            <div className="inputFields">
                                <div className="mailName">
                                    <input
                                        ref={name => {
                                            this.name = name;
                                        }}
                                        placeholder="Name"
                                        className="mailUserName"
                                        required
                                    />
                                </div>
                                <div className="eMail">
                                    <input
                                        ref={mail => {
                                            this.mail = mail;
                                        }}
                                        type="email"
                                        placeholder="E-mail Adresse"
                                        className="mailInput"
                                        required
                                    />
                                </div>
                                <div className="mailSubject">
                                    <input
                                        ref={subject =>
                                            (this.subject = subject)
                                        }
                                        placeholder="Anliegen"
                                        className="mailInput"
                                        required
                                    />
                                </div>
                            </div>
                            <img alt="" src="glasses2.jpg" />
                        </div>
                        <div className="textarea">
                            <textarea
                                ref={message => {
                                    this.message = message;
                                }}
                                placeholder="Nachricht"
                                className="mailMessage"
                                required
                            />
                        </div>
                        <div className="mailButton">
                            <a href="#modal">
                                <button onClick={this.sendMail}>SENDEN</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mail;
