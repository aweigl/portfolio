import { Route, Link } from "react-router-dom";
import React from "react";
import Footer from "./footer";
import Bio from "./bio";
import Koeln from "./koeln";
import Stellland from "./stellland";

function Main() {
    return (
        <div className="main">
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/koeln" component={Koeln} />
            <Route exact path="/stellland" component={Stellland} />
            <div className="banner">
                <Link to="/koeln">
                    <img src="/images/Koeln/KoelnKoelnerWirMain.jpg" />
                </Link>
                <Link to="/stellland">
                    <img src="/images/Stellland/StelllandMain.jpg" />
                </Link>
                <Link to="dirak">
                    <img src="/images/Dirak/DirakMain.jpg" />
                </Link>
                <Link to="loschelder">
                    <img src="/images/Loschelder/LoschelderMain.jpg" />
                </Link>
                <Link to="poschmann">
                    <img src="/images/Poschmann/PoschmannMain.jpg" />
                </Link>
            </div>
            <h2>Publikationen</h2>
            <div className="infoBoxes">
                <div id="box1" />
                <div id="box2" />
                <div id="box3" />
                <div id="box4" />
                <div id="box5" />
            </div>
            <div className="icons">
                <a href="https://twitter.com/stephhartung">
                    <i id="twitter" className="fab fa-twitter" />
                </a>
                <a href="https://www.linkedin.com/in/stephaniehartung/">
                    <i id="linkedIn" className="fab fa-linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Main;
