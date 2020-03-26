using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.DTO
{
    public class Recipe
    {
        public int RecipeId { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
        public string Discription { get; set; }
        public Type Type { get; set; }
        public IEnumerable<Ingridient> Ingridients { get; set; }
    }
}