using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.DTO
{
    public class Type
    {
        public int TypeId { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Units { get; set; }
    }
}