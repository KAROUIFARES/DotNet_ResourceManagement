

namespace backend.Entities
{
    public record AffectePost
    {
        public Guid id{get;init;}
        public string EmpId{get;init;}
        public string PostId{get; init;}
    }
}