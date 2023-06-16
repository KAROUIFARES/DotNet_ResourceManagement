using System.ComponentModel.DataAnnotations;

namespace backend.Dto
{
    public record AffectEquipPostDto
    {
        [Required]
        public string PostId {get;init;}
        [Required]
        public string EquiId {get;init;}
        [Required]
         public string type{get;init;}
    }
}