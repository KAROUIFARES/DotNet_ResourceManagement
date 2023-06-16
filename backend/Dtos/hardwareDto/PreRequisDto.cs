namespace backend.Dtos
{
    public record preRequisDto
    {
        public Guid id{get;init;}
        public string nom {get;init;}
        public string marque{get;init;}
        public string Modele{get;init;}
        public string Caract{get;init;}
        public Boolean state{get;init;}
    }
}