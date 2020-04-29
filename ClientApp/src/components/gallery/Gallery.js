import React from 'react';
import './Gallery.css';
import Recipe from '../recipe/Recipe';
import GalleryButton from '../button/GalleryButton';
import {RecipeApi} from '../../services/RecipeApi';
import {TypeRecipeApi} from '../../services/TypeRecipeApi';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.recipeApi = new RecipeApi();
        this.typeApi = new TypeRecipeApi();
        this.state = {
            recipes: [],
            filteredRecipes: [],
            types: []
        };

        this.filterRecipesByTypeId = this.filterRecipesByTypeId.bind(this);
        this.showAllRecipes = this.showAllRecipes.bind(this);
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
    }

    async componentDidMount() {
        const recipes = await this.recipeApi.getAllRecipes();
        const types = await this.typeApi.getAllTypes();

        this.setState({
            recipes,
            types,
            filteredRecipes: [...recipes]
        })
    }

    filterRecipesByTypeId(typeId) {
        const filteredRecipes = this.state.recipes.filter(recipe => recipe.type.typeId === typeId);

        this.setState({
            filteredRecipes
        });
    }

    showAllRecipes() {
        this.setState({
            filteredRecipes: [...this.state.recipes]
        });
    }

    handleDeleteRecipe(recipeId) {
        return async (event) =>{
            event.stopPropagation(); 

            const isDeleted = await this.recipeApi.deleteRecipe(recipeId);

            if (isDeleted) { // if recipe gets deleted from db we can remove it from our state
                const recipes = [...this.state.recipes];
                const index = this.getIndexByRecipeId(recipeId, recipes);

                if (index > -1) {
                    recipes.splice(index, 1);
                    this.setState({
                        filteredRecipes: [...recipes],
                        recipes: recipes
                    });
                }
            }
        };  
    }

    getIndexByRecipeId(recipeId, recipes) {
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            
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
                    {this.state.types.map((type) => {
                        return (
                            <GalleryButton 
                                key={type.typeId} 
                                onCLickHandler={this.filterRecipesByTypeId} 
                                recipeType={type} />
                        );
                    })}
                </div>
                <div className="recipe-item">
                    {this.state.recipes.length > 0 ?
                        this.state.filteredRecipes.map((recipe) => {
                            return (
                                <Recipe 
                                    onDeleteClick={this.handleDeleteRecipe(recipe.recipeId)} 
                                    history={this.props.history} key={recipe.recipeId} 
                                    recipe={recipe} />
                            );          
                        })
                        : "Loanding ..."
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;