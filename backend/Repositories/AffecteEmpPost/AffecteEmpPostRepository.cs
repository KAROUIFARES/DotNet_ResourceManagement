using backend.Entities;

namespace backend.Repository
{
     public interface AffecterEmpPostRepository
    {
        Task<IEnumerable<AffectePost>> GetEmpPostsAsync();
        Task AffectePostAsync(AffectePost AffectPost);
        Task<AffectePost> GetEmpPostAsync(Guid id);
        Task <IEnumerable<AffectePost>> GetEmppPostAsync(string id);
        Task DeletePostAsync(Guid id);

        Task <IEnumerable<AffectePost>> GetEmpPost1(string id);
        Task <AffectePost>GetPost(string postid,string empid);
    }
}