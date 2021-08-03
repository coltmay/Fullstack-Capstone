using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public class ResInstanceRepository : BaseRepository, IResInstanceRepository
    {
        public ResInstanceRepository(IConfiguration configuration) : base(configuration) { }

        public List<ResInstance> GetAllByUser(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  r.Id AS ResDayId, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal,
                                u.Id AS UserTableUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarUrl, u.UserTypeId,
                                re.Id, re.ResInstanceId, re.ExerciseId, re.Weight, re.Difficulty,
                                e.Id, e.Name AS ExerciseName, e.Sets, e.Reps, e.Description, e.URL,
                                m.Id AS MealId, m.Name AS MealName, m.Calories
                        FROM ResInstances r
                        LEFT JOIN Users u ON r.UserId = u.Id
                        LEFT JOIN ResInstanceExercises re ON re.ResInstanceId = r.Id
                        LEFT JOIN Meals m ON m.ResInstanceId = r.Id
                        LEFT JOIN Exercises e ON re.ExerciseId = e.Id
                        WHERE u.Id = @userId
                        ORDER BY Date DESC
                    ";

                    DbUtils.AddParameter(cmd, "@userId", userId);

                    var reader = cmd.ExecuteReader();

                    var resinstances = new List<ResInstance>();

                    while (reader.Read())
                    {

                        // Pull id from database...
                        var ResDayId = DbUtils.GetInt(reader, "ResDayId");
                        var existingResInstance = resinstances.FirstOrDefault(parameter => parameter.Id == ResDayId);

                        if (existingResInstance == null)
                        {
                            existingResInstance = new ResInstance()
                            {
                                Id = DbUtils.GetInt(reader, "ResDayId"),
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
                                    AvatarUrl = DbUtils.GetString(reader, "AvatarUrl"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                                },
                                ExerciseList = new List<Exercise>(),
                                MealList = new List<Meal>()
                            };
                            resinstances.Add(existingResInstance);
                        }

                        if (DbUtils.IsNotDbNull(reader, "ExerciseId"))
                        {
                            var ExerciseId = DbUtils.GetInt(reader, "ExerciseId");
                            var existingExercise = existingResInstance.ExerciseList.FirstOrDefault(parameter => parameter.Id == ExerciseId);

                            if (existingExercise == null)
                            {
                                existingResInstance.ExerciseList.Add(new Exercise()
                                {
                                    Id = DbUtils.GetInt(reader, "ExerciseId"),
                                    Name = DbUtils.GetString(reader, "ExerciseName"),
                                    Sets = DbUtils.GetInt(reader, "Sets"),
                                    Reps = DbUtils.GetInt(reader, "Reps"),
                                    Description = DbUtils.GetString(reader, "Description"),
                                    Url = DbUtils.GetString(reader, "URL")
                                });
                            }
                        }

                        if (DbUtils.IsNotDbNull(reader, "MealId"))
                        {
                            var MealId = DbUtils.GetInt(reader, "MealId");
                            var existingMeal = existingResInstance.MealList.FirstOrDefault(parameter => parameter.Id == MealId);

                            if (existingMeal == null)
                            {
                                existingResInstance.MealList.Add(new Meal()
                                {
                                    Id = DbUtils.GetInt(reader, "MealId"),
                                    Name = DbUtils.GetString(reader, "MealName"),
                                    ResInstanceId = DbUtils.GetInt(reader, "ResDayId"),
                                    Calories = DbUtils.GetInt(reader, "Calories")
                                });
                            }
                        }
                    }
                    reader.Close();

                    return resinstances;
                }
            }
        }

        public ResInstance GetById(int resId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  r.Id AS ResDayId, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal,
                                u.Id AS UserTableUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarUrl, u.UserTypeId,
                                re.Id, re.ResInstanceId, re.ExerciseId, re.Weight, re.Difficulty,
                                e.Id, e.Name AS ExerciseName, e.Sets, e.Reps, e.Description, e.URL,
                                m.Id AS MealId, m.Name AS MealName, m.Calories
                        FROM ResInstances r
                        LEFT JOIN Users u ON r.UserId = u.Id
                        LEFT JOIN ResInstanceExercises re ON re.ResInstanceId = r.Id
                        LEFT JOIN Meals m ON m.ResInstanceId = r.Id
                        LEFT JOIN Exercises e ON re.ExerciseId = e.Id
                        WHERE r.Id = @resId
                    ";

                    DbUtils.AddParameter(cmd, "@resId", resId);

                    ResInstance resinstance = null;

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        if (resinstance == null)
                        {
                            resinstance = new ResInstance()
                            {
                                Id = DbUtils.GetInt(reader, "ResDayId"),
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
                                    AvatarUrl = DbUtils.GetString(reader, "AvatarUrl"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                                },
                                ExerciseList = new List<Exercise>(),
                                MealList = new List<Meal>()
                            };
                        }

                        if (DbUtils.IsNotDbNull(reader, "ExerciseId"))
                        {
                            var ExerciseId = DbUtils.GetInt(reader, "ExerciseId");
                            var existingExercise = resinstance.ExerciseList.FirstOrDefault(parameter => parameter.Id == ExerciseId);

                            if (existingExercise == null)
                            {
                                resinstance.ExerciseList.Add(new Exercise()
                                {
                                    Id = DbUtils.GetInt(reader, "ExerciseId"),
                                    Name = DbUtils.GetString(reader, "ExerciseName"),
                                    Sets = DbUtils.GetInt(reader, "Sets"),
                                    Reps = DbUtils.GetInt(reader, "Reps"),
                                    Description = DbUtils.GetString(reader, "Description"),
                                    Url = DbUtils.GetString(reader, "URL")
                                });
                            }
                        }

                        if (DbUtils.IsNotDbNull(reader, "MealId"))
                        {
                            var MealId = DbUtils.GetInt(reader, "MealId");
                            var existingMeal = resinstance.MealList.FirstOrDefault(parameter => parameter.Id == MealId);

                            if (existingMeal == null)
                            {
                                resinstance.MealList.Add(new Meal()
                                {
                                    Id = DbUtils.GetInt(reader, "MealId"),
                                    Name = DbUtils.GetString(reader, "MealName"),
                                    ResInstanceId = DbUtils.GetInt(reader, "ResDayId"),
                                    Calories = DbUtils.GetInt(reader, "Calories")
                                });
                            }
                        }
                    }

                    reader.Close();

                    return resinstance;
                }
            }
        }

        public void Add(ResInstance resInstance, int userId)
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

                    DbUtils.AddParameter(cmd, "@UserId", userId);
                    DbUtils.AddParameter(cmd, "@BeforeMood", resInstance.BeforeMood);
                    DbUtils.AddParameter(cmd, "@AfterMood", resInstance.AfterMood);
                    DbUtils.AddParameter(cmd, "@UserWeight", resInstance.UserWeight);
                    DbUtils.AddParameter(cmd, "@Journal", resInstance.Journal);

                    resInstance.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(ResInstance resInstance)
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
                    cmd.CommandText = @"
                        DELETE FROM ResInstanceExercises WHERE ResInstanceId = @id;
                        DELETE FROM Meals WHERE ResInstanceId = @id;
                        DELETE FROM ResInstances WHERE Id = @id;
                    ";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

