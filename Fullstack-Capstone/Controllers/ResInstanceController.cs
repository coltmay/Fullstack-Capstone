using Fullstack_Capstone.Models;
using Fullstack_Capstone.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ResInstanceController : Controller
    {
        private readonly IResInstanceRepository _resinstanceRepository;
        private readonly IUserRepository _userRepository;

        public ResInstanceController(IResInstanceRepository resinstanceRepository, IUserRepository userRepository)
        {
            _resinstanceRepository = resinstanceRepository;
            _userRepository = userRepository;
        }

        [HttpGet("myResinstances")]
        public IActionResult Get()
        {
            User CurrentUser = GetCurrentUserProfile();
            return Ok(_resinstanceRepository.GetAllByUser(CurrentUser.Id));
        }

        //? EDITED THIS
        [HttpGet("detail/{resId}")]
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

        private string GetCurrentFirebaseUserProfileId()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return id;
        }

        private User GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
