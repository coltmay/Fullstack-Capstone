using Fullstack_Capstone.Models;
using Fullstack_Capstone.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ResInstanceController : Controller
    {
        private readonly IResInstanceRepository _resinstanceRepository;

        public ResInstanceController(IResInstanceRepository resinstanceRepository)
        {
            _resinstanceRepository = resinstanceRepository;
        }

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            return Ok(_resinstanceRepository.GetAllByUser(userId));
        }

        [HttpGet("resinstance/{resId}")]
        public IActionResult GetById(int resId)
        {
            var resInstance = _resinstanceRepository.GetById(resId);
            if (resInstance == null)
            {
                return NotFound();
            }
            return Ok(resInstance);
        }

        [HttpPost]
        public IActionResult Post(ResInstance resinstance)
        {
            _resinstanceRepository.Add(resinstance);
            return Ok(resinstance);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, ResInstance resinstance)
        {
            if (id != resinstance.Id)
            {
                return BadRequest();
            }

            _resinstanceRepository.Update(resinstance);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _resinstanceRepository.Delete(id);
            return NoContent();
        }
    }
}
