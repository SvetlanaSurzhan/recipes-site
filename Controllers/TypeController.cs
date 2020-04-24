using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RecipeWebApplication.EntityDatabase.Models;
using RecipeWebApplication.Repositories;
using Type = RecipeWebApplication.EntityDatabase.Models.Type;

namespace RecipeWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TypeController : ControllerBase
    {


        public TypeController()
        {
        }
        [HttpGet]
        public IEnumerable<Type> GetAllTypes(){
            var repository = new TypeRepository();
            var types = repository.GetAllTypes();
            return types;
        }
        [HttpPost]
        public Type Insert (Type type){
            var repository = new TypeRepository(); 
            Type result = repository.Insert(type);
            return result;
        }
    }
}        