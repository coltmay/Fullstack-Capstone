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
    }
}
