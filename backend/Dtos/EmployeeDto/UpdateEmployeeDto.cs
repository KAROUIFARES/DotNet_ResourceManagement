namespace backend.Dtos
{
    public record UpdateEmployee
    {
        public string firstname{ get; init; } 
        public string lastname{ get; init; } 
        public string mail{ get; init; } 
        public string phone{ get; init; } 
        public string NumComptBanc{ get; init;} 
        public string LaunchDate{get;init;}
    }
}