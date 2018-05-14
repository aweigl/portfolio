import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.openMenu = this.openMenu.bind(this);
    }
    componentDidMount() {
        document.addEventListener("click", e => {
            if (e.target != this.burger) {
                this.setState({
                    openMenu: false
                });
            }
        });
    }
    openMenu() {
        if (this.state.openMenu) {
            this.setState({
                openMenu: false
            });
        } else {
            this.setState({
                openMenu: true
            });
        }
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="name">
                    STEPHANIE HARTUNG
                </Link>

                <div
                    className="menuContainer"
                    ref={menuCont => (this.menuContainer = menuCont)}
                >
                    <img
                        id="menu"
                        src="menu.png"
                        alt="dropdown-menu"
                        onClick={this.openMenu}
                        ref={burger => (this.burger = burger)}
                    />
                    {this.state.openMenu && (
                        <div
                            className="menuLinks"
                            ref={menu => (this.menuLinks = menu)}
                        >
                            <Link to="/bio">Biographie</Link>
                            <Link to="/koeln">Koeln Koelner Wir</Link>
                            <Link to="/stellland">Stellland</Link>
                            <Link to="/dirak">Dirak</Link>
                            <Link to="/loschelder">Loschelder</Link>
                            <Link to="/poschmann">Poschmann</Link>
                        </div>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;
