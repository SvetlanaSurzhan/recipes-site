using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RecipeWebApplication.EntityDatabase.Models;
using RecipeWebApplication.Repositories;

namespace RecipeWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly ILogger<RecipeController> _logger;

        public RecipeController(ILogger<RecipeController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public Recipe AddNew(Recipe recipe) {
            var repository = new RecipeRepository();
            Recipe result = repository.Insert(recipe);

            return result;
        }

        [HttpGet]
        public IEnumerable<Recipe> GetAll()
        {
            var repository = new RecipeRepository();
            var recipes = repository.GetAll();

            return recipes;
        }

        [HttpGet("{recipeId}")]
        public Recipe GetById(int recipeId)
        {
            var repository = new RecipeRepository();

            return repository.GetById(recipeId);
        }

        [HttpDelete("{recipeId}")]
        public void DeleteRecipe(int recipeId)
        {
           var repository = new RecipeRepository(); 
           repository.DeleteRecipe(recipeId);
        }
        [HttpPut]
        public Recipe UpdateRecipe(Recipe updatedRecipe)
        {
            var repository = new RecipeRepository(); 
            return repository.UpdateRecipe(updatedRecipe);
        }
    }
}
