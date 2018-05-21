import React from "react";

class Bio extends React.Component {
    render() {
        return (
            <div className="Bio">
                <div className="bioImg">
                    <img alt="" src="bio.webp" />
                </div>
                <div className="bioText">
                    <div>
                        Auf dieser Website zeige ich Ihnen grafische Arbeiten
                        von 1995 bis heute, die ich im Auftrag zahlreicher
                        Kunden entwickeln durfte. ​ Meine Kernkompetenz ist die
                        Entwicklung von Erscheinungsbildern und deren Umsetzung
                        in analoge und digitale Medien.
                    </div>
                    <div className="textSpacer" />
                    <div className="cvText">
                        Ein besonderer Schwerpunkt ist dabei die Konzeption,
                        Gestaltung und redaktionelle Betreuung von Newslettern
                        und Kundenmagazinen.​
                        <div className="textSpacer" />
                        Für meine Arbeiten bin ich mehrfach ausgezeichnet
                        worden.
                        <a href="stephanieCV.pdf" target="_blank">
                            <img src="cv2.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;
