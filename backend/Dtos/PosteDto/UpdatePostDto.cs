using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public record UpdatePostDto
    {
        [Required]
        public string title { get; init; }
        [Required]
        public string hieraLevel{ get; init; }
    }
}