using Fullstack_Capstone.Models;

namespace Fullstack_Capstone.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        User GetByFirebaseUserId(string firebaseUserId);
    }
}