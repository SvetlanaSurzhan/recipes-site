using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.EntityDatabase.Models
{
    public class Ingridient
    {
        public int IngridientId { get; set; }
        public string Name { get; set; }
        public bool Quantity { get; set; }
        public string Units { get; set; }
        public int RecipeId { get; set; }
    }
}