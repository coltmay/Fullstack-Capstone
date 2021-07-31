using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Repositories
{
    public class MealRepository : BaseRepository, IMealRepository
    {
        public MealRepository(IConfiguration configuration) : base(configuration) { }

        public Meal GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  m.Id, m.Name, m.ResInstanceId, m.Calories
                        FROM Meals m
                        WHERE m.Id = @Id
                    ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    Meal meal = null;

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        meal = new Meal()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ResInstanceId = DbUtils.GetInt(reader, "ResInstanceId"),
                            Calories = DbUtils.GetInt(reader, "Calories")
                        };
                    }

                    reader.Close();

                    return meal;
                }
            }
        }

        public List<Meal> GetByResInstanceId(int ResInstanceId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  m.Id, m.Name, m.ResInstanceId, m.Calories
                        FROM Meals m
                        WHERE m.ResInstanceId = @ResInstanceId
                    ";

                    DbUtils.AddParameter(cmd, "@ResInstanceId", ResInstanceId);

                    var reader = cmd.ExecuteReader();

                    var meals = new List<Meal>();

                    while (reader.Read())
                    {
                        meals.Add(new Meal()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ResInstanceId = DbUtils.GetInt(reader, "ResInstanceId"),
                            Calories = DbUtils.GetInt(reader, "Calories")
                        });
                    }
                    reader.Close();

                    return meals;
                }
            }
        }

        public void Add(Meal meal)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Meals ([Name], ResInstanceId, Calories)
                                        OUTPUT INSERTED.ID
                                        VALUES (@name, @resinstanceId, @calories)
                    ";

                    DbUtils.AddParameter(cmd, "@name", meal.Name);
                    DbUtils.AddParameter(cmd, "@resinstanceId", meal.ResInstanceId);
                    DbUtils.AddParameter(cmd, "@calories", meal.Calories);

                    meal.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Meal meal)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Meals
                        SET [Name] = @name,
                            Calories = @calories
    
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", meal.Name);
                    DbUtils.AddParameter(cmd, "@calories", meal.Calories);
                    DbUtils.AddParameter(cmd, "@id", meal.Id);

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
                    cmd.CommandText = "DELETE FROM Meals WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

