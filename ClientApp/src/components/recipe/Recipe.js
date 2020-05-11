import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe-container" onClick={() => (this.props.history.push(`/update/${this.props.recipe.recipeId}`))}>
                <div className="recipe-items">
                    <img className="img-item" alt={this.props.recipe.name} src={this.props.recipe.picture} />
                    <h4>{this.props.recipe.name}</h4>
                    <h5>Ingredients:</h5>
                    <p>
                        {this.props.recipe.ingredients.map((ingr, i) => {
                            return (
                                <li key={i}>
                                    <span>{ingr.name} </span>
                                    <span>{ingr.quantity} </span>
                                    <span>{ingr.units} </span>
                                </li>
                            );
                        })}
                    </p>
                    <button onClick={this.props.onDeleteClick}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Recipe;