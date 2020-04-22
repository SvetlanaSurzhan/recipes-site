import React from 'react';
import './Create.css';
import InputForm from '../inputForm/InputForm';
import recipeTypes from '../button/TypeData';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.createNewRecipeApiCall = this.createNewRecipeApiCall.bind(this);
    }
    
    createNewRecipeApiCall = (newRecipe) => {
        console.log('SEND CREATE NEW RECIPE API CALL', newRecipe);
    }

    render() {
        return (
            <div className="create-container">
                <h2>Create new recipe</h2>
                <InputForm types={recipeTypes} onSave={this.createNewRecipeApiCall}/>
            </div>
        );
    }
}

export default Create;