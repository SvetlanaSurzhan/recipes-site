import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends React.Component {

    render() {
        return (
            <div className="recipe-container">
                <div className="recipe-items">
                    <img src={`data:image/png;base64,${this.props.recipe.picture}`} />
                    <h5>{this.props.recipe.name}</h5>
                    <h6>Ingredients:</h6>
                    <p>
                        {this.props.recipe.ingredients.map(ingr => {
                            return (
                                <li>
                                    <span>{ingr.name} </span>
                                    <span>{ingr.quantity} </span>
                                    <span>{ingr.units} </span>
                                </li>
                            );
                        })}
                    </p>
                </div>
            </div>
        );
    }
}

export default Recipe;