

using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public record CreateEmployeeDto
    {
        [Required]
        public string firstname{ get; init; } 
        [Required]
        public string lastname{ get; init; } 
        [Required]
        public string mail{ get; init; } 
        [Required]
        public string phone{ get; init; }  
        [Required]
        public string NumComptBanc{ get; init; } 
        [Required]
        public string DateOccupation{get;init;}
        [Required]
        public string LaunchDate{get;init;}
        public string resignationDate{get;init;}
        [Required]
        public Boolean state{get;init;}
    }
}