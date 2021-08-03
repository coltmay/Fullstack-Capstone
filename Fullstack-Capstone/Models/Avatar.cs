using System.ComponentModel.DataAnnotations;

namespace Fullstack_Capstone.Models
{
    public class Avatar
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ImageURL { get; set; }
    }
}