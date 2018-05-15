import { Route, Link } from "react-router-dom";
import React from "react";
import Footer from "./footer";
import Bio from "./bio";
import Koeln from "./koeln";
import Stellland from "./stellland";

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
                <div className="spacer" />
                <h2>Publikationen</h2>
                <div className="infoBoxes">
                    <div className="box">
                        <div>
                            <img src="Books/Starke-Marken.jpg" />
                            <p id="text1">
                                <strong>
                                    Starke Marken – systemische Entwicklung und
                                    Führung, ganzheitliches Beziehungsmanagement
                                </strong>
                                <br />
                                Mit einem Vorwort von Prof. Dr. Franz-Rudolf
                                Esch,EBS Business School
                                <br />
                                <em>
                                    Verlag Unternehmer Medien GmbH, Bonn,
                                    September 2013
                                </em>
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <img src="Books/buch3.jpg" />
                            <p id="text2">
                                <strong>
                                    Gestalt im Management – Eine andere Sicht
                                    auf Marken- und Unternehmensführung in
                                    komplexen Märkten
                                </strong>
                                <br />
                                <em>Springer Gabler Verlag, Wiesbaden, 2013</em>
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <img src="Books/Kanzlei.jpg" />
                            <p id="text3">
                                <strong>
                                    Salomo Friedlaender/Mynona - Impulsgeber der
                                    Gestaltherapie / Balance, Nullpunkt,
                                    Schöpferische Indifferenz
                                </strong>
                                <br />
                                Titel des eigenen Beitrags: „Einfach beim Wort
                                nehmen“
                                <em>
                                    Herausgeber Detlef Thiel / Kohlhage Verlag,
                                    Bergisch Gladbach, 2014
                                </em>
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <img src="Books/buch2.jpg" />
                            <p id="text4">
                                <strong>
                                    Warum funktionieren Aufstellungen? Eine
                                    Betrachtung in 14 Thesen
                                </strong>
                                <br />
                                <em>
                                    Deutscher Wissenschafts-Verlag, Baden Baden,
                                    2014 (erscheint in englischer Sprache in
                                    2018)
                                </em>
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <img src="Books/Friedlaender-Gestalt.jpg" />
                            <p id="text5">
                                <strong>
                                    Die Kanzlei als erfolgreiche Marke
                                </strong>
                                <br />
                                Mit Vorwörtern von Markus Hartung, Direktor an
                                der Bucerius Law School, <br />
                                Hamburg und Prof. Dr. Leo Staub, Direktor
                                Universität St. Gallen
                                <br />
                                <em>Springer Gabler Verlag, Wiesbaden, 2015</em>
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <img src="Books/buch1.jpg" />
                            <p id="text6">
                                <strong>
                                    Theorie und Praxis der
                                    Organisationsaufstellung– Grundlagen für
                                    systemische Personal- und
                                    Organisationsentwicklung
                                </strong>
                                <br />
                                <em>
                                    Springer Gabler Verlag, Wiesbaden, März 2018
                                </em>
                            </p>
                        </div>
                    </div>
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
}

export default Main;
