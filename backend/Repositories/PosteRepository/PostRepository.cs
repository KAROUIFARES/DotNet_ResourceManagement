using backend.entities;

namespace backend.Repository
{
    
    public interface PostRepository
    {
        Task<Post> GetPostAsync(Guid id);
        Task<IEnumerable<Post>> GetPostsAsync();
        Task CreatePostAsync(Post post);
        Task UpdatePostAsync(Post post);
        Task UpdatePostStateAsync(Post post);
    }
}