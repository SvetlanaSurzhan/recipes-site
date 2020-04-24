import React from "react";
import "./InputForm.css";

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        let recipe =  {
            recipeId: 0,
            ingredients: [],
            name: "",
            description: "",
            type: this.props.types[2],
            picture: "",
        };

        if (this.props.recipe) {
            recipe = {...this.props.recipe};
        }

        this.newIngredient = {
            ingredientId: 0,
            name: "",
            quantity: 0,
            units: "",
        };

        this.state = {
            recipe,
            newIngredient: {...this.newIngredient}
        };
    }

    handleRecipeChange = (key) => {
        return (event) => {
            const recipe = {...this.state.recipe}; 

            recipe[key] = event.target.value;

            this.setState({ recipe });

            console.log(this.state.recipe);
        };
    };

    handleDropDownSelect = (event) => {
        const typeId = event.target.value;
        const typeObj = this.props.types.find(t => t.typeId.toString() === typeId);
        const recipe = {...this.state.recipe}; 

        recipe.type = typeObj;

        this.setState({ recipe });
    }

    handleIngredientChange = (key) => {
        return (event) => {
            const newIngredient = {...this.state.newIngredient}
            const value = event.target.value;

            //check if number
            if (value && !isNaN(value)) {
                newIngredient[key] = parseFloat(value);
            } else {
                newIngredient[key] = value;
            }


            this.setState({newIngredient});

            console.log(this.state.newIngredient);
        };
    };

    handleImageUpload = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        const that = this;
        const recipe = {...this.state.recipe}

        fileReader.addEventListener("load", function () {
            recipe.picture = fileReader.result

            that.setState({
                recipe
            });

            console.log('Read file and store into state', that.state.recipe)
          }, false);

        fileReader.readAsDataURL(file);
    };

    handleAddIngredient = (event) => {
        event.preventDefault();
        const recipe = {...this.state.recipe};
        recipe.ingredients.push(this.state.newIngredient);

        this.setState({ recipe });
        this.setState({ newIngredient: {...this.newIngredient} }); 
    }

    handleSubmit = (recipe) => {
        return (event) => {
            event.preventDefault();
            this.props.onSave(recipe)
        }
    }

    
    render() {  
        return (
            <div className="form">
                <h4>Recipe:</h4>
                <form onSubmit={this.handleSubmit(this.state.recipe)} className="recipe-form">
                    <img alt="img" className="img-item" src={this.state.recipe.picture} />

                    <label htmlFor="img">Select image:</label>
                    <input
                        type="file"
                        className="image-file-upload"
                        id="myImage"
                        name="myImage"
                        onChange={this.handleImageUpload}
                        accept="image/*"
                    ></input>

                    <label htmlFor="recipe-name">Name:</label>
                    <input
                        type="text"
                        onChange={this.handleRecipeChange("name")}
                        value={this.state.recipe.name}
                        id="recipe-name"
                        name="recipe-name"
                    ></input>

                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        onChange={this.handleRecipeChange("description")}
                        value={this.state.recipe.description}
                        id="description"
                        name="description"
                    ></input>

                    <label>Select recipe type:</label>
                    <select value={this.state.recipe.type.typeId} onChange={this.handleDropDownSelect}>
                        {this.props.types.map((type, i) => (
                            <option key={i} value={type.typeId}>{type.type}</option>
                        ))}
                    </select>

                    <h4>Ingredients:</h4>
                    <label htmlFor="ingredient-name">Name</label>
                    <input
                        type="text"
                        onChange={this.handleIngredientChange("name")}
                        value={this.state.newIngredient.name}
                        id="ingredient-name"
                        name="ingredient-name"
                    ></input>
                    <label htmlFor="ingredient-quantity">Quantity</label>
                    <input
                        type="number"
                        onChange={this.handleIngredientChange("quantity")}
                        value={this.state.newIngredient.quantity}
                        id="ingredient-quantity"
                        name="ingredient-quantity"
                    ></input>
                    <label htmlFor="ingredient-units">Units</label>
                    <input
                        type="text"
                        onChange={this.handleIngredientChange("units")}
                        value={this.state.newIngredient.units}
                        id="ingredient-units"
                        name="ingredient-units"
                    ></input>
                    <button onClick={this.handleAddIngredient}>
                        Add Ingredient
                    </button>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default InputForm;
