namespace backend.Dto
{
    public record GetEquiPostDto
    {
        public Guid id {get; init;}
        public string EquiId{get; init;}
        public string type{get;init;}
    }
}