import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__inner">
                    <div className="nav__logo">
                        <img className="nav__logo-img" src={logo} alt="Logo" />
                        <h2 className="nav__logo-text">Meme Generator</h2>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
