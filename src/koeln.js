import React from "react";

class Koeln extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId: 1
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.state.imageId === 4
            ? this.setState({
                  imageId: 1
              })
            : this.setState({
                  imageId: this.state.imageId + 1
              });

        console.log(this.state);
    }
    prev() {
        this.state.imageId === 1
            ? this.setState({
                  imageId: 4
              })
            : this.setState({
                  imageId: this.state.imageId - 1
              });

        console.log(this.state);
    }
    render() {
        return (
            <div className="koelnComponent">
                <div className="imageContainer">
                    <img
                        className="arrowKeys"
                        src="arrowLeft.png"
                        onClick={this.prev}
                    />
                    {this.state.imageId == 1 && (
                        <img
                            id="1"
                            src="images/Koeln/KoelnKoelnerWirMain.jpg"
                        />
                    )}

                    {this.state.imageId == 2 && (
                        <img id="2" src="images/Koeln/KoelnKoelnerWir3.jpg" />
                    )}

                    {this.state.imageId == 3 && (
                        <img id="3" src="images/Koeln/KoelnKoelnerWir4.jpg" />
                    )}
                    {this.state.imageId == 4 && (
                        <img id="4" src="images/Koeln/KoelnKoelnerWir5.jpg" />
                    )}
                    <img
                        className="arrowKeys"
                        src="arrowRight.png"
                        onClick={this.next}
                    />
                </div>
                <div className="KoelnText">
                    <h1>Konzept für eine Stadtmarketing Kampagne</h1>
                    Für meine Heimatstadt habe ich mit der Kampagne "Köln,
                    Kölner Wir" einen Vorschlag für eine Darstellung der Stadt
                    als Marke entwickelt. ​ Der Claim kann angepasst werden –
                    anstelle des "Wir" können Firmen, einzelne Personen oder
                    markante Gebäude der Stadt eingesetzt werden.
                </div>
            </div>
        );
    }
}

export default Koeln;
