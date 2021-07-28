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

        [HttpGet("resinstance/{resId}")]
        public IActionResult GetById(int resId)
        {
            var resInstance = _resExerciseRepository.GetById(resId);
            if (resInstance == null)
            {
                return NotFound();
            }
            return Ok(resInstance);
        }
    }
}