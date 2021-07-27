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
        }

        public Exercise GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  e.Id, e.Name, e.Sets, e.Reps, e.Description, e.Url
                        FROM Exercises e
                        WHERE e.Id = @Id
                    ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    Exercise exercise = null;

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        exercise = new Exercise()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Sets = DbUtils.GetInt(reader, "Sets"),
                            Reps = DbUtils.GetInt(reader, "Reps"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Url = DbUtils.GetString(reader, "Url")
                        };
                    }

                    reader.Close();

                    return exercise;
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
                    cmd.CommandText = @"INSERT INTO Exercises ([Name], Sets, Reps, Description, URL)
                                        OUTPUT INSERTED.ID
                                        VALUES (@name, @sets, @reps, @description, @url)
                    ";

                    DbUtils.AddParameter(cmd, "@name", exercise.Name);
                    DbUtils.AddParameter(cmd, "@sets", exercise.Sets);
                    DbUtils.AddParameter(cmd, "@reps", exercise.Reps);
                    DbUtils.AddParameter(cmd, "@description", exercise.Description);
                    DbUtils.AddParameter(cmd, "@url", exercise.Url);

                    exercise.Id = (int)cmd.ExecuteScalar();
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
                        UPDATE Exercises
                        SET [Name] = @name,
                            Sets = @sets,
                            Reps = @reps,
                            Description = @description,
                            URL = @url
    
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", exercise.Name);
                    DbUtils.AddParameter(cmd, "@sets", exercise.Sets);
                    DbUtils.AddParameter(cmd, "@reps", exercise.Reps);
                    DbUtils.AddParameter(cmd, "@description", exercise.Description);
                    DbUtils.AddParameter(cmd, "@url", exercise.Url);
                    DbUtils.AddParameter(cmd, "@id", exercise.Id);

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

