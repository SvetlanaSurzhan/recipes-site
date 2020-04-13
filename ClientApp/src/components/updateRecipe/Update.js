import React, { Component } from 'react';
import './Update.css';
import ChickenDrumstick from './ChickenDrumstick.jpg';


class Update extends React.Component {
    render() {
        return (
            <div className="update-container">
                <h2>View or update recipe</h2>
                <img src={ChickenDrumstick} className="img-item" />
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

export default Update;