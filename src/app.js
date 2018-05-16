import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
