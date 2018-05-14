import React from "react";
import { Route, Link } from "react-router-dom";
import Footer from "./footer";
import Bio from "./bio";
import Koeln from "./koeln";

function Main() {
    return (
        <div className="main">
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/koeln" component={Koeln} />
            <div className="banner">
                <Link to="/koeln">
                    <img src="/images/Koeln/KoelnKoelnerWirMain.jpg" />
                </Link>
                <img src="/images/Stellland/StelllandMain.jpg" />
                <img src="/images/Dirak/DirakMain.jpg" />
                <img src="/images/Loschelder/LoschelderMain.jpg" />
                <img src="/images/Poschmann/PoschmannMain.jpg" />
            </div>
        </div>
    );
}

export default Main;
