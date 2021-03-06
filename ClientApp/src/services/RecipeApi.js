import config from '../config.json'

export class RecipeApi {
    constructor(){
        this.baseUrl = config.baseUrl;
        this.recourse = 'recipe';
    }

    async getAllRecipes(){
        try {
            const response = await fetch(`${this.baseUrl}/${this.recourse}`, {
                method: 'GET'
            });

            return response.json();
        } catch (error) {
            console.error('Failed to get Recipes', error);
            throw error;    
        }
    }

    async getRecipeById(recipeId){
        try {
            const response = await fetch(`${this.baseUrl}/${this.recourse}/${recipeId}`, {
                method: 'GET'
            });

            return response.json();
        } catch (error) {
            console.error('Failed to get Recipe by id', error);
            throw error;    
        }
    }

    async updateRecipe(recipe) {
        try {
            recipe.typeId = recipe.type.typeId;
            recipe.type = null;

            const response = await fetch(`${this.baseUrl}/${this.recourse}`, {
                method: 'PUT',
                body: JSON.stringify(recipe),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return response.json();
        } catch (error) {
            console.error('Failed to update Recipe', error);
            throw error;    
        }
    }

    async createNewRecipe(recipe){
        try {
            recipe.typeId = recipe.type.typeId;
            recipe.type = null;

            const response = await fetch(`${this.baseUrl}/${this.recourse}`, {
                method: 'POST',
                body: JSON.stringify(recipe),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return response.json();
        } catch (error) {
            console.error('Failed to create new Recipe', error);
            throw error;    
        }
    }

    async deleteRecipe(recipeId){
        try {
            const response = await fetch(`${this.baseUrl}/${this.recourse}/${recipeId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                return true;
            }

            return false;
        } catch (error) {
            console.error('Failed to delete Recipe', error);
            throw error;    
        }
    }
};