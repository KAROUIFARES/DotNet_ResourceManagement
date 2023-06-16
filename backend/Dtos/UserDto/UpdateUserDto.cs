using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Dtos
{
    public record UpdateUserDto
    {
        [Required]
        public string firstName{get;init;}
        [Required]
        public string lastName{get;init;}
        [Required]
        public string login{get;init;}
        [Required]
        public string pwd {get;init;}
        [Required]
        public Boolean state{get;init;}
        [Required]
        public string role{get;init;}
    }
}