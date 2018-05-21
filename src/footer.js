import React from "react";

export default function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footer">
                <div className="CR">© 2018 Aaron Weigl</div>
                <span>Impressum</span>
                <div className="icons">
                    <a className="mailto" href="a.weigl1991@gmail.com">
                        <i id="mail" className="far fa-envelope" size="3x" />
                    </a>
                    <a
                        href="https://twitter.com/stephhartung"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i id="twitter" className="fab fa-twitter" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/stephaniehartung/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i id="linkedIn" className="fab fa-linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
