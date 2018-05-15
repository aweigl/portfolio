import { Route, Link } from "react-router-dom";
import React from "react";
import Footer from "./footer";
import Bio from "./bio";
import Koeln from "./koeln";
import Stellland from "./stellland";
import Publications from "./publications";

class Main extends React.Component {
    render() {
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
                {/*<div className="citation">
                    <p>
                        Ohne ihr Erscheinungsbild ist die Marke nicht
                        wahrnehmbar
                    </p>
                </div>*/}
                <Publications />
            </div>
        );
    }
}

export default Main;
