using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.EntityDatabase.Models
{
    public class Recipe
    {
        public int RecipeId { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
        public string Discription { get; set; }
        public int TypeId { get; set; }
    }
}