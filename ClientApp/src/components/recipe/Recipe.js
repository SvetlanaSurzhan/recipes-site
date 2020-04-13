import React, { Component } from 'react';
import './Recipe.css';
import ChickenDrumstick from './ChickenDrumstick.jpg';

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe-container">
                <div className="recipe-items">
                    <img src={ChickenDrumstick} className="img-item" />
                    <h5>Recipe1</h5>
                    <p>Ingredients: <br />
                    1. Chicken drumstick <br />
                    2. Sugar <br />
                    </p>
                </div>
            </div>
        );
    }
}

export default Recipe;