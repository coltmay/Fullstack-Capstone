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
    public class ExerciseController : Controller
    {
        private readonly IExerciseRepository _exerciseRepository;

        public ExerciseController(IExerciseRepository exerciseRepository)
        {
            _exerciseRepository = exerciseRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_exerciseRepository.GetAll());
        }

        [HttpGet("detail/{id}")]
        public IActionResult GetById(int id)
        {
            var exercise = _exerciseRepository.GetById(id);
            if (exercise == null)
            {
                return NotFound();
            }
            return Ok(exercise);
        }

        [HttpPost]
        public IActionResult Post(Exercise exercise)
        {
            _exerciseRepository.Add(exercise);
            return Ok(exercise);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Exercise exercise)
        {
            if (id != exercise.Id)
            {
                return BadRequest();
            }

            _exerciseRepository.Update(exercise);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _exerciseRepository.Delete(id);
            return NoContent();
        }
    }
}
