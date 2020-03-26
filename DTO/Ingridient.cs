using Microsoft.EntityFrameworkCore;

namespace RecipeWebApplication.DTO
{
    public class Ingridient
    {
        public int IngridientId { get; set; }
        public string Name { get; set; }
        public datetime Time { get; set; }
    }
}