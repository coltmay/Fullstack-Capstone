using Fullstack_Capstone.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public class ResInstancesRepository : BaseRepository, IResInstanceRepository
    {
        public ResInstancesRepository(IConfiguration configuration) : base(configuration) { }

        public List<ResInstance> GetAllByUser(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
            }
        }
    }

