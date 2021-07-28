using Fullstack_Capstone.Models;
using Fullstack_Capstone.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ResExerciseController : Controller
    {
        private readonly IResExerciseRepository _resExerciseRepository;

        public ResExerciseController(IResExerciseRepository resExerciseRepository)
        {
            _resExerciseRepository = resExerciseRepository;
        }

        [HttpGet("{rexId}")]
        public IActionResult GetById(int rexId)
        {
            var rex = _resExerciseRepository.GetById(rexId);
            if (rex == null)
            {
                return NotFound();
            }
            return Ok(rex);
        }

        [HttpPost]
        public IActionResult Post(ResInstanceExercise rex)
        {
            _resExerciseRepository.Add(rex);
            return Ok(rex);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, ResInstanceExercise rex)
        {
            if (id != rex.Id)
            {
                return BadRequest();
            }

            _resExerciseRepository.Update(rex);
            return NoContent();
        }

    }
}