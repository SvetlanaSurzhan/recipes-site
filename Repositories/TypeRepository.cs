using Microsoft.EntityFrameworkCore;
using RecipeWebApplication.EntityDatabase;
using System.Linq;
using System.Collections.Generic;
using RecipeWebApplication.EntityDatabase.Models;

namespace RecipeWebApplication.Repositories
{
    public class TypeRepository : ITypeRepository
    {
        public Type Insert(Type type)
        {
            using (var context = new RecipeContext())
            {
                context.Types.Add(type);
                // Saves changes
                context.SaveChanges();
                return type;
            }
        }
        public List<Type> GetAllTypes()
        {
            // Gets all types from database
            using (var context = new RecipeContext())
            {
                var type = context.Types
                  .ToList();
                return type;
            }
        }
    }
}