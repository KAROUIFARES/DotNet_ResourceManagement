using backend.entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbEmployeeRepository : EmployeeRepository
    {
        private const string databaseName="backend";
        private const string collectionName="Employees";
        private readonly IMongoCollection<Employee> EmployeesCollection ;
        private readonly FilterDefinitionBuilder<Employee> filterBuilder=Builders<Employee>.Filter;
        public MongoDbEmployeeRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            EmployeesCollection=database.GetCollection<Employee>(collectionName);
        }
        public async Task CreateEmployeeAsync(Employee employee)
        {
            await EmployeesCollection.InsertOneAsync(employee);
        }
        public async Task<Employee> GetEmployeeAsync(Guid id)
        {
            var filter=filterBuilder.Eq(employee=> employee.id,id);
            return await EmployeesCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync()
        {
            return await EmployeesCollection.Find(new BsonDocument()).ToListAsync();
        }

       

        public async Task UpdateEmployeeStateAsync(Employee emp)
        {
           var filter=filterBuilder.Eq(existingEmployee=> existingEmployee.id,emp.id);
            var update=Builders<Employee>.Update.Set("state",emp.state).Set("resignationDate",emp.resignationDate);
            await EmployeesCollection.UpdateOneAsync(filter,update);
        }

        public async Task UpdateEmployeeAsync(Employee emp)
        {
            var filter=filterBuilder.Eq(existingEmp=> existingEmp.id,emp.id);
            await EmployeesCollection.ReplaceOneAsync(filter,emp);
        }
    }
    }
