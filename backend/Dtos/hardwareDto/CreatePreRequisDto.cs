using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public record CreatePreRequisDto
    {

        [Required]
        public Guid id{get;init;}
        [Required]
        public string nom{get;init;}
        [Required]
        public string marque{get;init;}
        [Required]
        public string Modele{get;init;}
        [Required]
        public string Caract{get;init;}
        [Required]
        public Boolean state{get;init;}
    }
}