using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public record CreatePostDto
    {
        [Required]
        public string title { get; init; }
        [Required]
        public string hieraLevel{ get; init; }
    }
}