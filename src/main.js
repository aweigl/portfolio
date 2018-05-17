import { Route, Link } from "react-router-dom";
import React from "react";
import Bio from "./bio";
import Koeln from "./koeln";
import Stellland from "./stellland";
import Publications from "./publications";
import Mail from "./mail";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Route exact path="/mail" component={Mail} />
                <Route exact path="/bio" component={Bio} />
                <Route exact path="/koeln" component={Koeln} />
                <Route exact path="/stellland" component={Stellland} />
                {window.location.pathname === "/" && (
                    <div>
                        <div className="banner">
                            <Link to="/koeln">
                                <img
                                    alt=""
                                    src="/images/Koeln/KoelnKoelnerWirMain.jpg"
                                />
                            </Link>
                            <Link to="/stellland">
                                <img
                                    alt=""
                                    src="/images/Stellland/StelllandMain.jpg"
                                />
                            </Link>
                            <Link to="dirak">
                                <img alt="" src="/images/Dirak/DirakMain.jpg" />
                            </Link>
                            <Link to="loschelder">
                                <img
                                    alt=""
                                    src="/images/Loschelder/LoschelderMain.jpg"
                                />
                            </Link>
                            <Link to="poschmann">
                                <img
                                    alt=""
                                    src="/images/Poschmann/PoschmannMain.jpg"
                                />
                            </Link>
                        </div>
                        <div className="centerPiece">
                            <div className="citation">
                                <p>
                                    Ohne ihr Erscheinungsbild ist die Marke
                                    nicht wahrnehmbar.
                                </p>
                                <p>
                                    Ich nenne die Gestaltung des
                                    Erscheinungsbilds Marken Design, andere
                                    sprechen von Corporate Design.
                                </p>
                                <p>
                                    Marken Design ist die ganzheitliche
                                    Gestaltung des sinnlich erfahrbaren
                                    Marken-"körpers".
                                </p>
                                <p>
                                    Als solcher zeigt sich die Marke an allen
                                    Kontaktpunkten, die eine Organisation hat –
                                    nach innen wie nach außen.
                                </p>
                                <p>
                                    Gestalterisch definiert werden sämtliche
                                    Bereiche, die unsere fünf Sinne erreichen –
                                    von Materialien und Farbkanons über
                                    Formensprache und Sprachmelodie, Umgang mit
                                    Fotografie und Illustration bis hin zu ggf.
                                    olfaktorischen und gustatorischen und
                                    Bestimmungen.
                                </p>
                                <p>
                                    Gestalterisch umgesetzt dann sämtliche
                                    Organisationsbereiche – von der Architektur
                                    über Bekleidung bis hin zur Wort-Bild-Marke
                                    und zur Ausgestaltung sämtlicher Medien.
                                </p>

                                <h1>
                                    Marken Design ist (auch) meine Leidenschaft
                                </h1>
                                <p>
                                    Neben der strategischen Marken Beratung ist
                                    Marken Design einer meiner Schwerpunkte –
                                    ich brenne nicht nur für Marken, ich
                                    gestalte auch leidenschaftlich gerne das
                                    Erscheinungsbild für erfolgreiche Marken.
                                </p>
                            </div>
                        </div>
                        <Publications />
                    </div>
                )}
            </div>
        );
    }
}

export default Main;
