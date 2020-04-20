import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends React.Component {
    save(){
        alert("New recipe saved");
    }
    render() {
        return (
            <div className="form">
                <img className="img-item" />
                <form action="/action_page.php" className="upload-form">
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    <input type="submit"></input>
                </form>
                <form className="recipe-form-items">
                    <label for="recipe-name">Name:</label>
                    <input type="text" id="recipe-name" name="recipe-name"></input><br />
                    <label for="type">Type:</label>
                    <input type="text" id="type" name="type"></input><br />
                    <label for="ingredients">Ingredients:</label>
                    <input type="text" id="ingredients" name="ingredients"></input><br />
                    <label for="description">Description:</label>
                    <input type="text" id="description" name="description"></input><br />
                </form>
                <button onClick={this.save} className="save-button">Save</button>
            </div>
        );
    } 
}

export default InputForm;