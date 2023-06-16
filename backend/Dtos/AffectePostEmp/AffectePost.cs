namespace backend.Dto
{
    public record AffectePostDto
    {
        public Guid id{get;init;}
        public string EmpId{get;init;}
        public string PostId{get; init;}
    }
}