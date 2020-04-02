using Microsoft.EntityFrameworkCore;
using RecipeWebApplication.EntityDatabase.Models;


namespace RecipeWebApplication.EntityDatabase
{
    public class RecipeContext: DbContext
    {
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Type> Types { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder
            .UseMySQL("server=localhost;database=recipeDb;user=sveta;password=123");       
    }
}