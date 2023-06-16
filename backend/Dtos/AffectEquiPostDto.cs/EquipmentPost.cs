namespace backend.Dto
{
    public record EquipPostDto
    {
        public Guid id {get; init;}
        public string PostId {get;init;}
        public string EquiId {get;init;}
        public string type{get;init;}
    }
}