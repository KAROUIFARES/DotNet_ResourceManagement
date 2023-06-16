
namespace backend.entities
{
    public record Post
    {
        public Guid id { get; init; }
        public string title { get; init; }
        public string hieraLevel{ get; init; }
        public Boolean state { get; init; }
    }
}