using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public class ExerciseRepository : BaseRepository, IExerciseRepository
    {
        public ExerciseRepository(IConfiguration configuration) : base(configuration) { }

        public List<Exercise> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  e.Id, e.Name, e.Sets, e.Reps, e.Description, e.Url
                        FROM Exercises e
                        ORDER BY e.Name
                    ";

                    var reader = cmd.ExecuteReader();

                    var exercises = new List<Exercise>();

                    while (reader.Read())
                    {
                        exercises.Add(new Exercise()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Sets = DbUtils.GetInt(reader, "Sets"),
                            Reps = DbUtils.GetInt(reader, "Reps"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Url = DbUtils.GetString(reader, "Url")
                        });

                    }
                    reader.Close();

                    return exercises;
                }
            }

            public Exercise GetById(int id)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        SELECT  r.Id, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal,
                                u.Id AS UserTableUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarId, u.UserTypeId
                        FROM ResInstances r
                        LEFT JOIN Users u ON r.UserId = u.Id
                        WHERE r.Id = @resId
                    ";

                        DbUtils.AddParameter(cmd, "@resId", resId);

                        ResInstance resinstance = null;

                        var reader = cmd.ExecuteReader();

                        if (reader.Read())
                        {
                            resinstance = new ResInstance()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Date = DbUtils.GetDateTime(reader, "Date"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                BeforeMood = DbUtils.GetString(reader, "BeforeMood"),
                                AfterMood = DbUtils.GetString(reader, "AfterMood"),
                                UserWeight = DbUtils.GetInt(reader, "UserWeight"),
                                Journal = DbUtils.GetString(reader, "Journal"),
                                User = new User()
                                {
                                    Id = DbUtils.GetInt(reader, "UserTableUserId"),
                                    Username = DbUtils.GetString(reader, "Username"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    RegisterDate = DbUtils.GetDateTime(reader, "RegisterDate"),
                                    AvatarId = DbUtils.GetInt(reader, "AvatarId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                                }
                            };
                        }

                        reader.Close();

                        return resinstance;
                    }
                }
            }

            public void Add(Exercise exercise)
            {
                using (var conn = Connection)
                {
                    conn.Open();

                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"INSERT INTO ResInstances ([Date], UserId, BeforeMood, AfterMood, UserWeight, Journal)
                                        OUTPUT INSERTED.ID
                                        VALUES (@Date, @UserId, @BeforeMood, @AfterMood, @UserWeight, @Journal)
                    ";

                        DbUtils.AddParameter(cmd, "@Date", DateTime.Now);

                        DbUtils.AddParameter(cmd, "@UserId", 1);
                        DbUtils.AddParameter(cmd, "@BeforeMood", resInstance.BeforeMood);
                        DbUtils.AddParameter(cmd, "@AfterMood", resInstance.AfterMood);
                        DbUtils.AddParameter(cmd, "@UserWeight", resInstance.UserWeight);
                        DbUtils.AddParameter(cmd, "@Journal", resInstance.Journal);

                        resInstance.Id = (int)cmd.ExecuteScalar();
                    }
                }
            }

            public void Update(Exercise exercise)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        UPDATE ResInstances
                        SET BeforeMood = @BeforeMood,
                            AfterMood = @AfterMood,
                            Userweight = @UserWeight,
                            Journal = @Journal
    
                        WHERE Id = @id";

                        DbUtils.AddParameter(cmd, "@BeforeMood", resInstance.BeforeMood);
                        DbUtils.AddParameter(cmd, "@AfterMood", resInstance.AfterMood);
                        DbUtils.AddParameter(cmd, "@UserWeight", resInstance.UserWeight);
                        DbUtils.AddParameter(cmd, "@Journal", resInstance.Journal);
                        DbUtils.AddParameter(cmd, "@id", resInstance.Id);

                        cmd.ExecuteNonQuery();
                    }
                }
            }

            public void Delete(int id)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "DELETE FROM Exercises WHERE Id = @id";
                        DbUtils.AddParameter(cmd, "@id", id);
                        cmd.ExecuteNonQuery();
                    }
                }
            }

        }
    }

