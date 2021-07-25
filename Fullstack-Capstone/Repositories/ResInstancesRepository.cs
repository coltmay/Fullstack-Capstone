using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
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
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  r.Id, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal
                                u.Id, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.Avatar.Id, u.UserTypeId
                        FROM ResInstance r
                        LEFT JOIN Users u ON r.UserId = u.Id
                        WHERE u.Id = @userId
                    ";
                    var reader = cmd.ExecuteReader();

                    var resinstances = new List<ResInstance>();

                    while (reader.Read())
                    {
                        resinstances.Add(new ResInstance()
                        {

                        });
                    }
                }
            }
        }
    }
}

