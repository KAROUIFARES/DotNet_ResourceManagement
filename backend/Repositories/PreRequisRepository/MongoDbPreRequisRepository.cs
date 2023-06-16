using backend.entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbPreRequisRepository : PreRequisRepository
    {
        private const string databaseName="backend";
        private const string collectionName="hardware";
        private readonly IMongoCollection<preRequis> PreRequisCollection ;
        private readonly FilterDefinitionBuilder<preRequis> filterBuilder=Builders<preRequis>.Filter;
        public MongoDbPreRequisRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            PreRequisCollection=database.GetCollection<preRequis>(collectionName);
        }

        public async Task CreatePreRequisAsync(preRequis preRequis)
        {
            await PreRequisCollection.InsertOneAsync(preRequis);
        }

        public async Task<preRequis> GetPreRequisAsync(Guid id)
        {
            var filter=filterBuilder.Eq(preRequis=> preRequis.id,id);
            return await PreRequisCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<preRequis>> GetPreRequissAsync()
        {
            return await PreRequisCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdatePreRequisAsync(preRequis preRequis)
        {
            var filter=filterBuilder.Eq(existingpreRequis=> existingpreRequis.id,preRequis.id);
            await PreRequisCollection.ReplaceOneAsync(filter,preRequis);
        }

        public async Task UpdatePreRequisStateAsync(preRequis preRequis)
        {
            var filter=filterBuilder.Eq(existingPre=> existingPre.id,preRequis.id);
            var update=Builders<preRequis>.Update.Set("state",preRequis.state);
            await PreRequisCollection.UpdateOneAsync(filter,update);
        }
    }
}