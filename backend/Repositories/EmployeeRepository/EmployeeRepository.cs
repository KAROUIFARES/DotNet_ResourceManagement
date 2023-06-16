using backend.entities;

namespace backend.Repository
{
     public interface EmployeeRepository
    {
        Task CreateEmployeeAsync(Employee employee);
        Task<Employee> GetEmployeeAsync(Guid id);
        Task<IEnumerable<Employee>> GetEmployeesAsync();
        
        Task UpdateEmployeeStateAsync(Employee emp);
        Task UpdateEmployeeAsync(Employee emp);
    }
}