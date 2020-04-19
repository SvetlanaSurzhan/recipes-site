import React, { Component } from 'react';
import './GalleryButton.css';

class GalleryButton extends React.Component {
    render() {
        return (
            <div>
                <nav role="filtration" className="menu-item">
                    <ul className="filter-menu">
                        <button>{this.props.typeOfRecipe.name}</button>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default GalleryButton;