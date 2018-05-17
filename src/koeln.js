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
    componentDidMount() {
        document.addEventListener("keyup", e => {
            if (e.keyCode === 39) {
                this.next();
            } else if (e.keyCode === 37) {
                this.prev();
            }
        });
        this.auto();
    }
    auto() {
        setTimeout(() => {
            this.next();
            this.auto();
        }, 7000);
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
            <div className="Component">
                <p>Konzept für eine Stadtmarketing Kampagne</p>
                <div className="imageContainer" id="koeln">
                    {/*<div className="arrowKeys">
                        <img alt="" src="arrowLeft.png" onClick={this.prev} />
                    </div>*/}
                    {this.state.imageId === 1 && (
                        <img
                            alt=""
                            id="1"
                            src="images/Koeln/KoelnKoelnerWir2.jpg"
                        />
                    )}

                    {this.state.imageId === 2 && (
                        <img
                            alt=""
                            id="2"
                            src="images/Koeln/KoelnKoelnerWir3.jpg"
                        />
                    )}

                    {this.state.imageId === 3 && (
                        <img
                            alt=""
                            id="3"
                            src="images/Koeln/KoelnKoelnerWir4.jpg"
                        />
                    )}
                    {this.state.imageId === 4 && (
                        <img
                            alt=""
                            id="4"
                            src="images/Koeln/KoelnKoelnerWir5.jpg"
                        />
                    )}
                    {/*<div className="arrowKeys">
                        <img alt="" src="arrowRight.png" onClick={this.next} />
                    </div>*/}
                </div>
                <div className="textContainer">
                    <div className="Text">
                        Für meine Heimatstadt habe ich mit der Kampagne "Köln,
                        Kölner Wir" einen Vorschlag für eine Darstellung der
                        Stadt als Marke entwickelt. ​ Der Claim kann angepasst
                        werden – anstelle des "Wir" können Firmen, einzelne
                        Personen oder markante Gebäude der Stadt eingesetzt
                        werden.
                    </div>
                </div>
            </div>
        );
    }
}

export default Koeln;
