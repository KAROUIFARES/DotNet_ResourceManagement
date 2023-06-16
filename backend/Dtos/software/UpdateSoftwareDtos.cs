using System.ComponentModel.DataAnnotations;
namespace backend.Dtos;
public record Updatesoftware
{
    [Required]
    public string nom{get;init;}
    [Required]
    public string version{get;init;}
    [Required]
    public Boolean state{get;init;}
}