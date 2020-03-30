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
        public void Insert(Recipe recipe)
        {
            using (var context = new RecipeContext())
            {

                // Saves changes
                context.SaveChanges();
            }
        }

        public List<Recipe> GetAll()
        {
            // Gets and prints all recipe in database
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