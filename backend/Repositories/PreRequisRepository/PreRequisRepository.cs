

using backend.entities;

namespace backend.Repository
{
    public interface PreRequisRepository
    {
        Task CreatePreRequisAsync(preRequis preRequis);
        Task<preRequis> GetPreRequisAsync(Guid id);
        Task<IEnumerable<preRequis>> GetPreRequissAsync();
        Task UpdatePreRequisAsync(preRequis preRequis);
        Task UpdatePreRequisStateAsync(preRequis preRequis);
    }
}