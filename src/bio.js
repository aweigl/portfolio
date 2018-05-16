import React from "react";

class Bio extends React.Component {
    render() {
        return (
            <div className="Bio">
                <div className="bioImg">
                    <img alt="" src="bio.webp" />
                </div>
                <div className="bioText">
                    Auf dieser Website zeige ich Ihnen grafische Arbeiten von
                    1995 bis heute, die ich im Auftrag zahlreicher Kunden
                    entwickeln durfte. ​ Meine Kernkompetenz ist die Entwicklung
                    von Erscheinungsbildern und deren Umsetzung in analoge und
                    digitale Medien. Ein besonderer Schwerpunkt ist dabei die
                    Konzeption, Gestaltung und redaktionelle Betreuung von
                    Newslettern und Kundenmagazinen.​ Für meine Arbeiten bin ich
                    mehrfach ausgezeichnet worden.
                </div>
            </div>
        );
    }
}

export default Bio;
