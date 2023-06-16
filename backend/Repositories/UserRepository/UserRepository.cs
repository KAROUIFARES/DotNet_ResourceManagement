using backend.Entities;

namespace backend.Repository
{
    public interface UserRepository
    {
        Task<User> GetUserAsync(Guid id);
        Task<IEnumerable<User>> GetUsersAsync();

        Task CreateUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task<User> AuthentificationAsync(string login);
        Task UpdateUserStateAsync(User user);
    }

}