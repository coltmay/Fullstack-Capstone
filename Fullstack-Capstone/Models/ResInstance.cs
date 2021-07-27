using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Fullstack_Capstone.Models
{
    public class ResInstance
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public string BeforeMood { get; set; }

        [Required]
        public string AfterMood { get; set; }

        [Required]
        public int UserWeight { get; set; }

        [Required]
        public string Journal { get; set; }

        public User User { get; set; }

        public List<Exercise> ExerciseList { get; set; }
    }
}
