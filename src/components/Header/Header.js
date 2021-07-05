import React from "react";
import "./Header.css"
import logo from '../../logo.svg';

class Header extends React.Component {
    render() {
        return <header className="shadow">
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <img src={logo} className="logo" alt="" />
                <p className="fw-bold mb-0">React Project 0.1</p>
            </div>
        </header>
    }
}

export default Header;