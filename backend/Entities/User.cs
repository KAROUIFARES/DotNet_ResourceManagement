namespace backend.Entities
{
    public record User
    {
        public Guid id {get; init;}
        public string firstName { get; init;}
        public string lastName { get; init;}
        public string login { get; init;}
        public string pwd { get; init;}
        public Boolean state {get; init;}
        public IFormFile image {get;init;}
        public string role{get;init;}
    }
}