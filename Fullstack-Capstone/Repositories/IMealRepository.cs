using Fullstack_Capstone.Models;

namespace Fullstack_Capstone.Repositories
{
    public interface IMealRepository
    {
        void Add(Meal meal);
        void Delete(int id);
        Meal GetById(int id);
        void Update(Meal meal);
    }
}