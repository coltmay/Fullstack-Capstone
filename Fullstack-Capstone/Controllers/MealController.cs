using Fullstack_Capstone.Models;
using Fullstack_Capstone.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Fullstack_Capstone.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMealRepository _mealRepository;

        public MealController(IMealRepository mealRepository)
        {
            _mealRepository = mealRepository;
        }

        [HttpGet("{resInstanceId}/mealList")]
        public IActionResult Get(int resInstanceId)
        {
            return Ok(_mealRepository.GetByResInstanceId(resInstanceId));
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var meal = _mealRepository.GetById(id);
            if (meal == null)
            {
                return NotFound();
            }
            return Ok(meal);
        }

        [HttpPost]
        public IActionResult Post(Meal meal)
        {
            _mealRepository.Add(meal);
            return Ok(meal);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Meal meal)
        {
            if (id != meal.Id)
            {
                return BadRequest();
            }

            _mealRepository.Update(meal);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _mealRepository.Delete(id);
            return NoContent();
        }
    }
}
