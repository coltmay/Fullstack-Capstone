using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Models
{
    public class Meal
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int ResInstanceId { get; set; }

        [Required]
        public int Calories { get; set; }
    }
}
