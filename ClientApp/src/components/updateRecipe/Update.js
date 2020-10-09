import React from 'react';
import './Update.css';
import {
    withRouter
} from "react-router-dom";
import InputForm from '../inputForm/InputForm';
import {TypeRecipeApi} from '../../services/TypeRecipeApi'
import {RecipeApi} from '../../services/RecipeApi'


class Update extends React.Component {
    constructor(props) {
        super(props);   

        this.id = this.props.match.params.id; //getting recipe id from url address
        this.typeApi = new TypeRecipeApi();
        this.recipeApi = new RecipeApi();

        this.state = {
            recipe: {},
            types: []
        };

        this.updateRecipeApiCall = this.updateRecipeApiCall.bind(this);
    }

    async componentDidMount() {
        const types = await this.typeApi.getAllTypes();
        const recipe = await this.recipeApi.getRecipeById(this.id);

        this.setState({
            recipe,
            types
        })
    }

    async updateRecipeApiCall(recipe) {   
        await this.recipeApi.updateRecipe(recipe);
    }

    render() {
        return (
            <div className="update-container">
                <h2>View and update recipe</h2>
                {this.state.recipe.recipeId
                    ? <InputForm 
                        types={this.state.types} 
                        recipe={this.state.recipe} 
                        onSave={this.updateRecipeApiCall}/>
                    : "Loading ..."
                }
                
            </div>
        );
    }
}

export default withRouter(Update);