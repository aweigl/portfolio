import React from "react";

class ???? extends React.Component {
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
                <div className="imageContainer">
                    <div className="arrowKeys">
                        <img src="arrowLeft.png" onClick={this.prev} />
                    </div>
                    {this.state.imageId == 1 && (
                        <img
                            id="1"
                            src=""
                        />
                    )}

                    {this.state.imageId == 2 && (
                        <img id="2" src="" />
                    )}

                    {this.state.imageId == 3 && (
                        <img id="3" src="" />
                    )}
                    {this.state.imageId == 4 && (
                        <img id="4" src="" />
                    )}
                    <div className="arrowKeys">
                        <img src="arrowRight.png" onClick={this.next} />
                    </div>
                </div>
                <div className="Text">
                    <h1></h1>
                </div>
            </div>
        );
    }
}

export default ;
