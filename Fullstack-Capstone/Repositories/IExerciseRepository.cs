using Fullstack_Capstone.Models;
using System.Collections.Generic;

namespace Fullstack_Capstone.Repositories
{
    public interface IExerciseRepository
    {
        void Add(Exercise exercise);
        void Delete(int id);
        List<Exercise> GetAll();
        Exercise GetById(int id);
        void Update(Exercise exercise);
    }
}