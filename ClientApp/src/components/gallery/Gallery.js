import React from 'react';
import './Gallery.css';
import Recipe from '../recipe/Recipe';
import recipesFromApi from '../recipe/recipeData';
import GalleryButton from '../button/GalleryButton';
import recipeTypeFromApi from '../button/TypeData';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipesFromApi,
            filteredRecipes: recipesFromApi,
            recipeType: recipeTypeFromApi
        };

        this.filterRecipesByTypeId = this.filterRecipesByTypeId.bind(this);
        this.showAllRecipes = this.showAllRecipes.bind(this);
    }

    filterRecipesByTypeId(typeId) {
        const filteredRecipes = this.state.recipes.filter(recipe => recipe.typeId === typeId);

        this.setState(state => ({
            filteredRecipes
        }));
    }

    showAllRecipes() {
        this.setState(state => ({
            filteredRecipes: this.state.recipes
        }));
    }

    render() {
        return (
            <div className="gallery-wrapper">
                <div className="button-items">
                    <GalleryButton onCLickHandler={this.showAllRecipes} />
                    {this.state.recipeType.map((type) => {
                        return (
                            <GalleryButton key={type.typeId} onCLickHandler={this.filterRecipesByTypeId} recipeType={type} />
                        );
                    })}
                </div>
                <div className="recipe-item">
                    {this.state.filteredRecipes.map((recipe) => {
                        return (
                            <Recipe history={this.props.history} key={recipe.recipeId} recipe={recipe} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;