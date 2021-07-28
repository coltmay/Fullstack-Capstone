using Fullstack_Capstone.Models;

namespace Fullstack_Capstone.Repositories
{
    public interface IResExerciseRepository
    {
        ResInstanceExercise GetById(int resExId);
    }
}