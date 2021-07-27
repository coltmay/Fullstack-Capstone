using System;
using System.ComponentModel.DataAnnotations;

namespace Fullstack_Capstone.Models
{
    public class ResInstanceExercise
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int ResInstanceId { get; set; }

        [Required]
        public int ExerciseId { get; set; }

        [Required]
        public int Weight { get; set; }

        [Required]
        public int Difficulty { get; set; }
    }
}
