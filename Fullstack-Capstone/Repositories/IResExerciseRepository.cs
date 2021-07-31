using Fullstack_Capstone.Models;
using System.Collections.Generic;

namespace Fullstack_Capstone.Repositories
{
    public interface IResExerciseRepository
    {
        List<ResInstanceExercise> GetAllByResInstanceId(int ResInstanceId);
        ResInstanceExercise GetById(int resExId);
        void Add(ResInstanceExercise Rex);
        void Update(ResInstanceExercise Rex);
        void Delete(int id);

    }
}