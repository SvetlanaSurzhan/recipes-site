import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header-container">
                    <div className="logo-item">
                        <img src={logo} alt="logo" className="image-item" />
                        <h3>Homemade Food</h3>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;