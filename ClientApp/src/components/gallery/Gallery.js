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
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
    }

    filterRecipesByTypeId(typeId) {
        const filteredRecipes = this.state.recipes.filter(recipe => recipe.type.typeId === typeId);

        this.setState(state => ({
            filteredRecipes
        }));
    }

    showAllRecipes() {
        this.setState(state => ({
            filteredRecipes: this.state.recipes
        }));
    }

    handleDeleteRecipe(recipeId) {
        return (event) =>{
            event.stopPropagation(); 

            //api call
            const recipes = [...this.state.recipes];
            const index = this.getIndexByRecipeId(recipeId, recipes);

            if (index > -1) {
                recipes.splice(index, 1);
                this.setState({
                    filteredRecipes: recipes,
                    recipes: recipes
                });
            }
        };  
    }

    getIndexByRecipeId(recipeId, recipes) {
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            console.log(recipe.recipeId);
            if (recipe.recipeId === recipeId) {
                return i;
            }
        }

        return -1;
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
                            <Recipe onDeleteClick={this.handleDeleteRecipe(recipe.recipeId)} history={this.props.history} key={recipe.recipeId} recipe={recipe} />
                        );          
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;