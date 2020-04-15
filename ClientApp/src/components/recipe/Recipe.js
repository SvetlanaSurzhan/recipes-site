import React, { Component } from 'react';
import './Recipe.css';
import ChickenDrumstick from './ChickenDrumstick.jpg';
import recipeCake from './recipeCake'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeCake: recipeCake
        };
    }
    render() {
        return (
            <div className="recipe-container">
                {recipeCake.map(cake => {
                    return (
                        <div className="recipe-items">
                            <h5>{cake.name}</h5>
                            <h6>Ingredients:</h6>
                            <ul>
                                {
                                    cake.ingredients.map((ingr) => {
                                        return (
                                            <li key={ingr.id} align="start">
                                                {ingr.name}
                                                {ingr.quantity}
                                                {ingr.units}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <p>{cake.description}</p>
                        </div>
                    );
                })}

                {/* <img src={ChickenDrumstick} className="img-item" />
                            <h5>Recipe1</h5>
                            <p>Ingredients: <br />
                    1. Chicken drumstick <br />
                    2. Sugar <br />
                            </p> 
                            <img className="img-item">{cake.picture}</img>*/}
            </div>
        );
    }
}

export default Recipe;