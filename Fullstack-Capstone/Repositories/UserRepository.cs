using Microsoft.Extensions.Configuration;
using Fullstack_Capstone.Models;
using Fullstack_Capstone.Utils;
using System;

namespace Fullstack_Capstone.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  u.Id, u.FirebaseUserId, u.Username, u.Email, u.FirstName, u.LastName, u.RegisterDate, u.AvatarId, u.UserTypeId,
                                ut.Name AS UserTypeName
                        FROM Users u
                        LEFT JOIN UserTypes ut ON u.UserTypeId = ut.Id
                        WHERE FirebaseUserId = @FirebaseUSerId
                    ";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    User user = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            Email = DbUtils.GetString(reader, "Email"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            RegisterDate = DbUtils.GetDateTime(reader, "RegisterDate"),
                            AvatarId = DbUtils.GetInt(reader, "AvatarId"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "UserTypeName"),
                            }
                        };
                    }
                    reader.Close();

                    return user;
                }
            }
        }

        public void Add(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Users (FirebaseUserId, Username, Email, FirstName, LastName, RegisterDate, AvatarId, UserTypeId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Username, @Email, @FirstName, @LastName, @RegisterDate, @AvatarId, @UserTypeId)";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", user.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Username", user.Username);
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@FirstName", user.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", user.LastName);
                    DbUtils.AddParameter(cmd, "@RegisterDate", DateTime.Now);
                    DbUtils.AddParameter(cmd, "@AvatarId", user.AvatarId);
                    DbUtils.AddParameter(cmd, "@UserTypeId", 2);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}