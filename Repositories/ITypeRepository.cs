using System.Collections.Generic;
using RecipeWebApplication.EntityDatabase.Models;

namespace RecipeWebApplication.Repositories
{
    interface ITypeRepository
    {
        Type Insert(Type type);

        List<Type> GetAllTypes();
    }
}