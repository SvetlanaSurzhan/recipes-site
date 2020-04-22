import React from 'react';
import './Update.css';
import {
    withRouter
} from "react-router-dom";
import recipes from '../recipe/recipeData';
import InputForm from '../inputForm/InputForm';
import recipeTypes from '../button/TypeData';


class Update extends React.Component {
    constructor(props) {
        super(props);   
        const id = this.props.match.params.id;
        const existingRecipe = this.getRecipeById(id);
        this.state = existingRecipe;     
        this.updateRecipeApiCall = this.updateRecipeApiCall.bind(this);
    }

    getRecipeById(id) {
        return recipes.find(r => r.recipeId.toString() === id);
    }

    updateRecipeApiCall(recipe) {
        console.log(`SEND TO API TO SAVING ${recipe}`)
    }

    render() {
        return (
            <div className="update-container">
                <h2>Update recipe</h2>
                <InputForm types={recipeTypes} recipe={this.state} onSave={this.updateRecipeApiCall}/>
            </div>
        );
    }
}

export default withRouter(Update);