using Fullstack_Capstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public interface IResInstanceRepository
    {
        List<ResInstance> GetAllByUser(int userId);
    }
}
