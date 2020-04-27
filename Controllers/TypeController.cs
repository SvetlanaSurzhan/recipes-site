using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RecipeWebApplication.Repositories;
using Type = RecipeWebApplication.EntityDatabase.Models.Type;

namespace RecipeWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TypeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Type> GetAllTypes(){
            var repository = new TypeRepository();
            var types = repository.GetAllTypes();
            return types;
        }
    }
}        