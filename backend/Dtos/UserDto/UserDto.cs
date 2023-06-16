using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public record UserDto
    {
        public Guid id {get; init;}
        [Required]
        public string firstName { get; init;}
        [Required]
        public string lastName { get; init;}
        [Required]
        public string login { get; init;}
        [Required]
        public string pwd { get; init;}
        [Required]
        public Boolean state {get; init;}
        [Required]
        public IFormFile image {get;init;}

        [Required]
        public string role{get;init;}
    }
}