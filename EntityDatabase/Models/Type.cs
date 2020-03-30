using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.EntityDatabase.Models
{
    public class Type
    {
        public int TypeId { get; set; }
        public string Name { get; set; }
    }
}