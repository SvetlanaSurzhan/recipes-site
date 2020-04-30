import React from 'react';
import './Create.css';
import InputForm from '../inputForm/InputForm';
import {TypeRecipeApi} from '../../services/TypeRecipeApi';
import {RecipeApi} from '../../services/RecipeApi';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.typeApi = new TypeRecipeApi();
        this.recipeApi = new RecipeApi();
        this.defaulRecipe = {
            recipeId: 0,
            ingredients: [],
            name: "",
            description: "",
            type: null,
            picture: "",
        }
        
        this.state =  {
            recipe: this.defaulRecipe,
            types: []
        };

        this.createNewRecipeApiCall = this.createNewRecipeApiCall.bind(this);
    }

    async componentDidMount() {
        const types = await this.typeApi.getAllTypes();
        
        this.setState({types});
    }
    
    async createNewRecipeApiCall(newRecipe) {
        const response = await this.recipeApi.createNewRecipe(newRecipe);

        if (response.recipeId > 0) {
            this.setState({
                recipe: {...this.defaulRecipe} //defaulting state to default recipe if save was successfull
            })
        }
    }

    render() {
        return (
            <div className="create-container">
                <h2>Create new recipe</h2>
                <InputForm 
                    recipe={this.state.recipe}
                    types={this.state.types} 
                    onSave={this.createNewRecipeApiCall}/>
            </div>
        );
    }
}

export default Create;