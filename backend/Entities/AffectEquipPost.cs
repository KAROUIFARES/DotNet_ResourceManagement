namespace backend.entities
{
    public record AffectEquipPost
    {
        public Guid id {get; init;}
        public string PostId {get;init;}
        public string EquiId {get;init;}
        public string type{get;init;}
    }
}