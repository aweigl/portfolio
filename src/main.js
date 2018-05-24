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
        <Route exact path="/mail" component={Mail} />{" "}
        <Route exact path="/bio" component={Bio} />{" "}
        <Route exact path="/koeln" component={Koeln} />{" "}
        <Route exact path="/stellland" component={Stellland} />{" "}
        {window.location.pathname === "/" && (
          <div>
            <div className="banner">
              <Link to="/koeln">
                <img alt="" src="/images/Koeln/KoelnKoelnerWirMain.jpg" />
              </Link>{" "}
              <Link to="/stellland">
                <img alt="" src="/images/Stellland/StelllandMain.jpg" />
              </Link>{" "}
              <Link to="dirak">
                <img alt="" src="/images/Dirak/DirakMain.jpg" />
              </Link>{" "}
              <Link to="loschelder">
                <img alt="" src="/images/Loschelder/LoschelderMain.jpg" />
              </Link>{" "}
              <Link to="poschmann">
                <img alt="" src="/images/Poschmann/PoschmannMain.jpg" />
              </Link>{" "}
            </div>{" "}
            <div className="centerPiece">
              <div className="citation">
                <h1> ICH BRENNE FÜR MARKEN </h1>{" "}
                <p>
                  Jede Organisation ist eine Marke.Weil sie als System
                  identifizierbar und also markiert ist.Die Frage ist deshalb
                  nicht, ob eine Organisation eine erfolgreiche Marke hat.Die
                  Frage ist, wie die Organisation als Marke auftritt.Hierfür
                  braucht es die Fähigkeit, in Verbindungen zu denken und zu
                  handeln.Genau das biete ich Ihnen.{" "}
                </p>{" "}
                <p>
                  Ich lenke Ihren Blick dabei vor allem auf den Markenkern und
                  die daraus erwachsenen notwendigen Verbindungen, durch die
                  Ihre Marke eine überzeugende Gestalt wird.Beim Auftritt Ihrer
                  Marke biete ich Ihnen außerdem meine mehrfach ausgezeichnete
                  Expertise.{" "}
                </p>{" "}
                <p>
                  Hier finden Sie Informationen zu meinen Services in
                  strategischer Marken Entwicklung und in Full Service
                  Dienstleistungen für Marken Design.{" "}
                </p>{" "}
                <p>
                  Im Kontext der Markenentwicklungprozesse arbeite ich auch als
                  systemischer Coach in der Begleitung von Veränderungs - und
                  Transformationsprozessen–{" "}
                  <a href="https://www.coachpraxis-koeln.de/" target="__blank">
                    hier finden Sie hier weitere Informationen.{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  Ohne ihr Erscheinungsbild ist die Marke nicht wahrnehmbar.{" "}
                </p>{" "}
                <p>
                  Ich nenne die Gestaltung des Erscheinungsbilds Marken Design,
                  andere sprechen von Corporate Design.{" "}
                </p>{" "}
                <p>
                  Marken Design ist die ganzheitliche Gestaltung des sinnlich
                  erfahrbaren Marken - "körpers".{" "}
                </p>{" "}
                <p>
                  Als solcher zeigt sich die Marke an allen Kontaktpunkten, die
                  eine Organisation hat– nach innen wie nach außen.{" "}
                </p>{" "}
                <p>
                  Gestalterisch definiert werden sämtliche Bereiche, die unsere
                  fünf Sinne erreichen– von Materialien und Farbkanons über
                  Formensprache und Sprachmelodie, Umgang mit Fotografie und
                  Illustration bis hin zu ggf.olfaktorischen und gustatorischen
                  und Bestimmungen.{" "}
                </p>{" "}
                <p>
                  Gestalterisch umgesetzt dann sämtliche Organisationsbereiche–
                  von der Architektur über Bekleidung bis hin zur Wort - Bild -
                  Marke und zur Ausgestaltung sämtlicher Medien.{" "}
                </p>
                <h1>MARKEN DESIGN IST(AUCH) MEINE LEIDENSCHAFT </h1>{" "}
                <p>
                  Neben der strategischen Marken Beratung ist Marken Design
                  einer meiner Schwerpunkte– ich brenne nicht nur für Marken,
                  ich gestalte auch leidenschaftlich gerne das Erscheinungsbild
                  für erfolgreiche Marken.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <Publications />
          </div>
        )}{" "}
      </div>
    );
  }
}

export default Main;
