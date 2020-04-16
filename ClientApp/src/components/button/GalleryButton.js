import React, { Component } from 'react';
import './GalleryButton.css';

class GalleryButton extends React.Component {
    filter() {
        alert("It works!");
    }
    render() {
        return (
            <div className="button-wrapper">
                <nav role="filtration" className="menu-item">
                    <ul className="filter-menu">
                        <li><button onClick={this.filter}>Breakfast</button></li>
                        <li><button onClick={this.filter}>Lunch</button></li>
                        <li><button onClick={this.filter}>Dinner</button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default GalleryButton;