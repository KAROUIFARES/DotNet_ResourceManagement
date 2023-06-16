using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Dtos
{
    public record CreateUserDto
    {
        [Required]
        public string FirstName{get;init;}
        [Required]
        public string LastName{get;init;}
        [Required]
        public string login{get;init;}
        [Required]
        public string pwd {get;init;}
        [Required]
        public Boolean state{get;init;}
        public IFormFile image {get;init;}

        [Required]
        public string role{get;init;}
    }
}