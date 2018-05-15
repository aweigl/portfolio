import React from "react";

export default function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footer">
                <div className="CR">© 2018 Aaron Weigl</div>
                <span>Impressum</span>
                <div className="icons">
                    <i id="mail" className="far fa-envelope" size="3x" />
                    <a href="https://twitter.com/stephhartung">
                        <i id="twitter" className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/stephaniehartung/">
                        <i id="linkedIn" className="fab fa-linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
