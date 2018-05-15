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
            if (e.keyCode == 39) {
                this.next();
            } else if (e.keyCode == 37) {
                this.prev();
            }
        });
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
            <div className="Component">
                <div className="imageContainer" id="stellland">
                    <div className="arrowKeys">
                        <img src="arrowLeft.png" onClick={this.prev} />
                    </div>
                    {this.state.imageId == 1 && (
                        <img id="1" src="images/Stellland/STELLLAND Nr.6.jpg" />
                    )}

                    {this.state.imageId == 2 && (
                        <img id="2" src="images/Stellland/STELLLAND Nr.7.jpg" />
                    )}

                    {this.state.imageId == 3 && (
                        <img
                            id="3"
                            src="images/Stellland/Stellland-Doppel3.jpg"
                        />
                    )}
                    {this.state.imageId == 4 && (
                        <img
                            id="4"
                            src="images/Stellland/Stellland-Doppel6.jpg"
                        />
                    )}
                    {this.state.imageId == 5 && (
                        <img src="images/Stellland/Stellland-Doppel5.jpg" />
                    )}

                    <div className="arrowKeys">
                        <img src="arrowRight.png" onClick={this.next} />
                    </div>
                </div>
                <div className="Text">
                    <h1>STELLAND</h1>
                    STELLLAND Mitgliedermagazin DGfS Erscheinungsweise 4 x pro
                    Jahr ​ Chefredaktion Bildredaktion Gestaltung +
                    Reinzeichnung
                </div>
            </div>
        );
    }
}

export default Stellland;