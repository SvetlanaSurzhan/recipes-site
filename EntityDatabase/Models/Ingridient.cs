
namespace RecipeWebApplication.EntityDatabase.Models
{
    public class Ingredient
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public double Quantity { get; set; }
        public string Units { get; set; }
        public int RecipeId { get; set; }
    }
}