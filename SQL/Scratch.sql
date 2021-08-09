                        SELECT  r.Id AS ResDayId, r.Date, r.UserId, r.BeforeMood, r.AfterMood, r.UserWeight, r.Journal,
                                u.Id AS UserTableUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarId, u.UserTypeId,
                                re.Id, re.ResInstanceId, re.ExerciseId, re.Weight, re.Difficulty,
                                e.Id, e.Name AS ExerciseName, e.Sets, e.Reps, e.Description, e.URL,
                                m.Id AS MealId, m.Name AS MealName, m.Calories
                        FROM ResInstances r
                        LEFT JOIN Users u ON r.UserId = u.Id
                        LEFT JOIN ResInstanceExercises re ON re.ResInstanceId = r.Id
                        LEFT JOIN Meals m ON m.ResInstanceId = r.Id
                        LEFT JOIN Exercises e ON re.ExerciseId = e.Id
                        WHERE u.Id = 1
                        ORDER BY Date DESC;