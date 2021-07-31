using Fullstack_Capstone.Models;
using System.Collections.Generic;

namespace Fullstack_Capstone.Repositories
{
    public interface IMealRepository
    {
        void Add(Meal meal);
        void Delete(int id);
        Meal GetById(int id);
        List<Meal> GetByResInstanceId(int ResInstanceId);
        void Update(Meal meal);
    }
}