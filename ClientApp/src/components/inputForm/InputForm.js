import React from "react";
import "./InputForm.css";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.newIngredient = {
            ingredientId: 0,
            name: "",
            quantity: 0,
            units: "",
        };

        this.state = {
            recipe: {...this.props.recipe},
            newIngredient: {...this.newIngredient},
            isChecked: false
        };
        this.handleIsChecked=this.handleIsChecked.bind(this);
    }

    handleRecipeChange = (key) => {
        return (event) => {
            const recipe = {...this.state.recipe}; 

            recipe[key] = event.target.value;

            this.setState({ recipe });
        };
    };

    handleDropDownSelect = (event) => {
        const typeId = event.target.value;
        const typeObj = this.props.types.find(t => t.typeId.toString() === typeId);
        const recipe = {...this.state.recipe}; 

        recipe.type = typeObj;

        this.setState({ recipe });
    };

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

        this.setState({ 
            recipe,
            newIngredient: {...this.newIngredient} //defaulting ingredient form to default values after adding new
        });
    }

    handleSubmit = (recipe) => {
        return (event) => {
            event.preventDefault();
            this.props.onSave(recipe);
            alert("Your recipe is saved!");
        }
    }

    handleIsChecked() {
        // this.state.isChecked = !this.state.isChecked; 
        this.setState({
            isChecked: true
        });
    }  

    // handleIsChecked(){
         
    //      if (document.getElementById("want-add-ingredient").checked){
    //          document.getElementById("add-ingredient").style.display="flex";
    //      }else{
    //          document.getElementById("add-ingredient").style.display="none";
    //     }
    // }  

    render() {  
        return (
            <div className="form">
                <h4>Recipe:</h4>
                <form onSubmit={this.handleSubmit(this.state.recipe)} className="recipe-form">
                    <img alt="" className="img-item" src={this.state.recipe.picture} />

                    <label htmlFor="img">Select image:</label>
                    <input
                        type="file"
                        className="image-file-upload"
                        id="myImage"
                        name="myImage"
                        onChange={this.handleImageUpload}
                        accept="image/*"
                        required
                    ></input>

                    <label htmlFor="recipe-name">Recipe name:</label>
                    <input
                        type="text"
                        onChange={this.handleRecipeChange("name")}
                        value={this.state.recipe.name}
                        id="recipe-name"
                        name="recipe-name"
                        required
                    ></input>

                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        onChange={this.handleRecipeChange("description")}
                        value={this.state.recipe.description}
                        id="description"
                        name="description"
                        placeholder="Write description here"
                        required
                    ></textarea>

                    <label>Select recipe type:</label>
                    <select value={this.state.recipe.type ? this.state.recipe.type.typeId : "0"} onChange={this.handleDropDownSelect} required>
                        {this.props.types.map((type, i) => (
                            <option key={i} value={type.typeId}>{type.name}</option>
                        ))}
                        <option value="0">Please select Type</option>
                    </select>

                    <h4>Ingredients:</h4>
                    
                    <div>
                        {
                            this.state.recipe.ingredients.length > 0
                                ? this.state.recipe.ingredients.map((ingredient, i) => (
                                    <div key={i}>{ingredient.name} - {ingredient.quantity} - {ingredient.units}</div>
                                ))
                                : "Recipe doesn't have ingredietns"
                        }
                    </div>        
                    
                    <div className="form-ingredietns">
                        <label htmlFor="want-add-ingredient">
                            Do you want to add an ingredient?
                        </label>
                        <input
                            id="want-add-ingredient" 
                            name="want-add-ingredient"
                            type="checkbox"
                            onClick={this.handleIsChecked}
                            style = {{display: this.state.isChecked ? "block" : "none"}}
                        >  
                        </input>
                        
                        <div id="add-ingredient" >
                            <input
                                type="text"
                                onChange={this.handleIngredientChange("name")}
                                value={this.state.newIngredient.name}
                                id="ingredient-name"
                                name="ingredient-name"
                                placeholder="Ingredient name..."
                            ></input>
                            <label htmlFor="ingredient-quantity">Quantity</label>
                            <input
                                type="number"
                                onChange={this.handleIngredientChange("quantity")}
                                value={this.state.newIngredient.quantity}
                                id="ingredient-quantity"
                                name="ingredient-quantity"
                                placeholder="0000..."
                            ></input>
                            <input
                                type="text"
                                onChange={this.handleIngredientChange("units")}
                                value={this.state.newIngredient.units}
                                id="ingredient-units"
                                name="ingredient-units"
                                placeholder="Units..."
                            ></input>
                            <button onClick={this.handleAddIngredient} className="add-button">
                                +
                            </button>
                        </div>
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default InputForm;
