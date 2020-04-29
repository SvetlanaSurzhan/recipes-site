using System.Collections.Generic;

namespace RecipeWebApplication.EntityDatabase.Models
{
    public class Recipe
    {
        public int RecipeId { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Ingredient> Ingredients { get; set; }
        public virtual Type Type { get; set; }
    }
}