using System;
using Microsoft.EntityFrameworkCore;
using System.Text;
using RecipeWebApplication.EntityDatabase;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using RecipeWebApplication.EntityDatabase.Models;

namespace RecipeWebApplication.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        public Recipe Insert(Recipe recipe)
        {
            using (var context = new RecipeContext())
            {
                context.Recipes.Add(recipe);
                // Saves changes
                context.SaveChanges();

                return recipe;
            }
        }

        public List<Recipe> GetAll()
        {
            // Gets all recipes from database
            using (var context = new RecipeContext())
            {
                var recipes = context.Recipes
                  .Include(p => p.Ingredients)
                  .Include(p => p.Type)
                  .ToList();

                return recipes;
            }
        }
    }
}