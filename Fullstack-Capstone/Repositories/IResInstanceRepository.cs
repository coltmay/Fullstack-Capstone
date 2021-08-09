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

        ResInstance GetById(int resId);

        int Add(ResInstance resInstance, int userId);

        void Update(ResInstance resInstance);

        void Delete(int id);
    }
}
