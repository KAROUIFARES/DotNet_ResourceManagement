namespace backend.entities
{
    public record Employee 
    {
        public Guid id {get;init;}
        public string firstname{ get; init; } 
        public string lastname{ get; init; } 
        public string mail{ get; init; } 
        public string phone{ get; init; }  
        public string NumComptBanc{ get; init; } 
        public string DateOccupation{get;init;}
        public string LaunchDate{get;init;}
        public string resignationDate{get;init;}
        public Boolean state{get;init;}

    }
}