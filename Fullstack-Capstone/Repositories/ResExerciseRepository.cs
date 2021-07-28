using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public class ResExerciseRepository : BaseRepository, IResExerciseRepository
    {
        public ResExerciseRepository(IConfiguration configuration) : base(configuration) { }

        public ResInstanceExercise GetById(int rexId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  re.Id, re.ResInstanceId, re.ExerciseId, re.Weight, re.Difficulty,
                                r.Id AS ResDayId, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal,
                                u.Id AS UserTableUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarId, u.UserTypeId,
                                e.Id, e.Name AS ExerciseName, e.Sets, e.Reps, e.Description, e.URL
                        FROM ResInstanceExercises re
                        LEFT JOIN ResInstances r ON r.Id= re.ResInstanceId
                        LEFT JOIN Users u ON r.UserId = u.Id
                        LEFT JOIN Exercises e ON re.ExerciseId = e.Id
                        WHERE re.Id = @rexId
                    ";

                    DbUtils.AddParameter(cmd, "@rexId", rexId);

                    ResInstanceExercise Rex = null;

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Rex = new ResInstanceExercise()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ResInstanceId = DbUtils.GetInt(reader, "ResInstanceId"),
                            ExerciseId = DbUtils.GetInt(reader, "ExerciseId"),
                            Weight = DbUtils.GetInt(reader, "Weight"),
                            Difficulty = DbUtils.GetInt(reader, "Difficulty"),
                            Exercise = new Exercise()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "ExerciseName"),
                                Sets = DbUtils.GetInt(reader, "Sets"),
                                Reps = DbUtils.GetInt(reader, "Reps"),
                                Description = DbUtils.GetString(reader, "Description"),
                                Url = DbUtils.GetString(reader, "Url")
                            },
                            User = new User()
                            {
                                Id = DbUtils.GetInt(reader, "UserTableUserId"),
                                Username = DbUtils.GetString(reader, "Username"),
                                AvatarId = DbUtils.GetInt(reader, "AvatarId")
                            }
                        };
                    }

                    reader.Close();

                    return Rex;
                }

            }
        }

        public void Add(ResInstanceExercise Rex)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO ResInstanceExercises (ResInstanceId, ExerciseId, Weight, Difficulty)
                        OUTPUT INSERTED.ID
                        VALUES (@ResInstanceId, @ExerciseId, @Weight, @Difficulty)
                    ";

                    DbUtils.AddParameter(cmd, "@ResInstanceId", Rex.ResInstanceId);
                    DbUtils.AddParameter(cmd, "@ExerciseId", Rex.ExerciseId);
                    DbUtils.AddParameter(cmd, "@Weight", Rex.Weight);
                    DbUtils.AddParameter(cmd, "@Difficulty", Rex.Difficulty);

                    Rex.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        //public void Update(ResInstance resInstance)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                UPDATE ResInstances
        //                SET BeforeMood = @BeforeMood,
        //                    AfterMood = @AfterMood,
        //                    Userweight = @UserWeight,
        //                    Journal = @Journal

        //                WHERE Id = @id";

        //            DbUtils.AddParameter(cmd, "@BeforeMood", resInstance.BeforeMood);
        //            DbUtils.AddParameter(cmd, "@AfterMood", resInstance.AfterMood);
        //            DbUtils.AddParameter(cmd, "@UserWeight", resInstance.UserWeight);
        //            DbUtils.AddParameter(cmd, "@Journal", resInstance.Journal);
        //            DbUtils.AddParameter(cmd, "@id", resInstance.Id);

        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

        //public void Delete(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                DELETE FROM ResInstanceExercises WHERE ResInstanceId = @id;
        //                DELETE FROM ResInstances WHERE Id = @id;
        //            ";

        //            DbUtils.AddParameter(cmd, "@id", id);
        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}
        //}
    }
}
