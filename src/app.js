import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            backg: true
        };
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {this.state.backg && (
                        <div className="background">
                            <a
                                onClick={() => {
                                    this.setState({
                                        backg: false
                                    });
                                }}
                            >
                                <img src="MainBg.png" />
                            </a>
                        </div>
                    )}
                    {!this.state.backg && (
                        <div className="App">
                            <Header />
                            <Main />
                            <Footer />
                        </div>
                    )}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
