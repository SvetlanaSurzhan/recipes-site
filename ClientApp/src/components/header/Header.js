import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends React.Component {
    filter() {
        alert("It works!");
    }

    render() {
        return (
            <div>
                <header className="header">
                        <div className="logo column">
                            <img src={logo} alt="logo" />
                            Homemade Food
                        </div>
                        <nav role="filtration" className="nav-menu column">
                            <ul id="menu" className="filter-menu">
                                <li><button onClick={this.filter}>Breakfast</button></li>
                                <li><button onClick={this.filter}>Lunch</button></li>
                                <li><button onClick={this.filter}>Dinner</button></li>
                            </ul>
                        </nav>
                </header>    
            </div>
        );
    }
}

export default Header;