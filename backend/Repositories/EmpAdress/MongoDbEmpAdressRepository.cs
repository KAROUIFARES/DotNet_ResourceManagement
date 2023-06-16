using backend.entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbEmpAdressRepository : EmpAdressRepository
    {
        private const string databaseName="backend";
        private const string collectionName="EmpAdress";
        private readonly IMongoCollection<EmpAdress> EmpAdressCollection ;
        private readonly FilterDefinitionBuilder<EmpAdress> filterBuilder=Builders<EmpAdress>.Filter;
        public MongoDbEmpAdressRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            EmpAdressCollection=database.GetCollection<EmpAdress>(collectionName);
        }

        public async Task CreateEmpAdressAsync(EmpAdress empAdress)
        {
            await EmpAdressCollection.InsertOneAsync(empAdress);
        }

        public async Task<IEnumerable<EmpAdress>> GetEmpAdressAsync()
        {
            return await EmpAdressCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<EmpAdress> GetEmpAdresseAsync(Guid id)
        {
            var filter=filterBuilder.Eq(EmpAdress=> EmpAdress.id,id);
            return  await EmpAdressCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<EmpAdress> GetEmpAdressseAsync(string id)
        {
            var filter=filterBuilder.Eq(EmpAdress=> EmpAdress.EmpId,id);
            return  await EmpAdressCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task UpdateEmpAdressAsync(EmpAdress empAdress)
        {
             var filter=filterBuilder.Eq(existingEmp=> existingEmp.EmpId,empAdress.EmpId);
            await EmpAdressCollection.ReplaceOneAsync(filter,empAdress);
        }
    }
    }
