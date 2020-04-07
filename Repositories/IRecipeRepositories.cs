using System.Collections.Generic;
using RecipeWebApplication.EntityDatabase.Models;

namespace RecipeWebApplication.Repositories
{
    interface IRecipeRepository
    {
        Recipe Insert(Recipe recipe);

        List<Recipe> GetAll();

        Recipe GetById(int recipeId);

        void DeleteRecipe(int recipeId);

        Recipe UpdateRecipe(Recipe updatedRecipe);
    }
}