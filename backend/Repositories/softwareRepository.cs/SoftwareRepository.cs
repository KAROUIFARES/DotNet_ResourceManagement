using backend.entities;
namespace backend.Repository
{
    public interface SoftwareRepository
    {
        Task CreatesoftwareAsync(software software);
        Task<software> GetsoftwareAsync(Guid id);
        Task<IEnumerable<software>> GetsoftwareeAsync();
        Task UpdatesoftwareAsync(software software);
        Task UpdatesoftwareStateAsync(software software);
    }
}