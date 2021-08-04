using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Models
{
    public class UserRepositoryViewModel
    {
        User User { get; set; }

        List<ResInstance> ResInstanceList { get; set; }
    }
}
