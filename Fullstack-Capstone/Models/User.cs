using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Models
{
    public class User
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string FirebaseUserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public DateTime RegisterDate { get; set; }

        [Required]
        public string AvatarUrl { get; set; }

        [Required]
        public int UserTypeId { get; set; }

        public UserType UserType { get; set; }

        public Avatar Avatar { get; set; }
    }
}
