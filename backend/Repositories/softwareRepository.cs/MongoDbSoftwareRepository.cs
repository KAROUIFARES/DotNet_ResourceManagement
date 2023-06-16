using backend.entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbSoftwareRepository : SoftwareRepository
    {
        private const string databaseName="backend";
        private const string collectionName="Software";
        private readonly IMongoCollection<software> SoftwareCollection ;
        private readonly FilterDefinitionBuilder<software> filterBuilder=Builders<software>.Filter;
        public MongoDbSoftwareRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            SoftwareCollection=database.GetCollection<software>(collectionName);
        }

        public async Task CreatesoftwareAsync(software software)
        {
            await SoftwareCollection.InsertOneAsync(software);
        }

        public async Task<software> GetsoftwareAsync(Guid id)
        {
           var filter=filterBuilder.Eq(software=> software.id,id);
            return await SoftwareCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<software>> GetsoftwareeAsync()
        {
            return await SoftwareCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdatesoftwareAsync(software software)
        {
            var filter=filterBuilder.Eq(existingpreRequis=> existingpreRequis.id,software.id);
            await SoftwareCollection.ReplaceOneAsync(filter,software);
        }

        public async Task UpdatesoftwareStateAsync(software software)
        {
            var filter=filterBuilder.Eq(existingPre=> existingPre.id,software.id);
            var update=Builders<software>.Update.Set("state",software.state);
            await SoftwareCollection.UpdateOneAsync(filter,update);
        }
    }
}