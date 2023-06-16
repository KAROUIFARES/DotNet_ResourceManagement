using System.ComponentModel.DataAnnotations;
namespace backend.Dtos;
public record UpdateStatesoftware
{
    [Required]
    public Boolean state{get;init;}
}