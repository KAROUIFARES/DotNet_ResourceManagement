using backend.entities;

namespace backend.Repository
{
    
    public interface EmpAdressRepository
    {

        Task<EmpAdress> GetEmpAdresseAsync(Guid id);
        Task<EmpAdress> GetEmpAdressseAsync(string id);
        Task<IEnumerable<EmpAdress>> GetEmpAdressAsync();
        Task CreateEmpAdressAsync(EmpAdress empAdress);
        Task UpdateEmpAdressAsync(EmpAdress empAdress);
    }
}