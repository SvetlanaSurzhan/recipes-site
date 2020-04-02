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
        public int TypeId {get; set;}

        // static void Test() 
        // {
        //     Recipe recipe = new Recipe()
        //     {
        //         RecipeId = 1,
        //         Name = "Pancakes",
        //         Picture = "",
        //         Discription = "test",
        //         Type = new Type()
        //         {
        //             TypeId = 11,
        //             Name = "Breakfast",
        //         },

        //         Ingridients = new List<Ingridient>()
        //         {
        //             new Ingridient()
        //             {
        //                 IngridientId = 22,
        //                 Name = "Flour",
        //                 Quantity = 1.1,
        //                 Units = "pound",
        //                 RecipeId = 1,
        //             },
        //             new Ingridient()
        //             {
        //                 IngridientId = 23,
        //                 Name = "Eg",
        //                 Quantity = 2.0,
        //                 Units = "ech",
        //                 RecipeId = 1,
        //             }
        //         }
        //     }
    }
}