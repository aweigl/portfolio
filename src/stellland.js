import React from "react";

class Stellland extends React.Component {
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
        }, 4000);
    }
    next() {
        this.state.imageId === 5
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
                  imageId: 5
              })
            : this.setState({
                  imageId: this.state.imageId - 1
              });

        console.log(this.state);
    }
    render() {
        return (
            <div className="Component" id="stellland">
                <div className="Text" id="stellland">
                    <h1>STELLLAND</h1>
                    STELLLAND Mitgliedermagazin DGfS Erscheinungsweise 4 x pro
                    Jahr ​ Chefredaktion Bildredaktion Gestaltung +
                    Reinzeichnung
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <div className="imageContainer" id="stellland">
                    {/*<div className="arrowKeys">

                        <img alt="" src="arrowLeft.png" onClick={this.prev} />

                    </div>*/}
                    {this.state.imageId === 1 && (
                        <img
                            alt=""
                            id="1"
                            src="images/Stellland/STELLLANDNr6.jpg"
                        />
                    )}
                    {this.state.imageId === 2 && (
                        <img
                            alt=""
                            id="2"
                            src="images/Stellland/STELLLANDNr7.jpg"
                        />
                    )}
                    {this.state.imageId === 3 && (
                        <img
                            alt=""
                            id="3"
                            src="images/Stellland/Stellland-Doppel3.jpg"
                        />
                    )}
                    {this.state.imageId === 4 && (
                        <img
                            alt=""
                            id="4"
                            src="images/Stellland/Stellland-Doppel6.jpg"
                        />
                    )}
                    {this.state.imageId === 5 && (
                        <img
                            alt=""
                            src="images/Stellland/Stellland-Doppel5.jpg"
                        />
                    )}

                    {/*<div className="arrowKeys">

                        <img alt="" src="arrowRight.png" onClick={this.next} />

                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Stellland;
