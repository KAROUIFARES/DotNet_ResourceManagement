using backend.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
namespace backend.Repository
{
    public class MongoDbUserRepository : UserRepository
    {
        private const string databaseName="backend";
        private const string collectionName="Users";
        private readonly IMongoCollection<User> usersCollection ;
        private readonly FilterDefinitionBuilder<User> filterBuilder=Builders<User>.Filter;
        public MongoDbUserRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            usersCollection=database.GetCollection<User>(collectionName);
        }

        public async Task<User> AuthentificationAsync(string login)
        {
            var filter=filterBuilder.Eq(user=> user.login,login);
            return  await usersCollection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task CreateUserAsync(User user)
        {
            await usersCollection.InsertOneAsync(user);
        }
        public async Task<User> GetUserAsync(Guid id)
        {
            var filter=filterBuilder.Eq(user=> user.id,id);
            return  await usersCollection.Find(filter).SingleOrDefaultAsync();
        }
        public async Task <IEnumerable<User>> GetUsersAsync()
        {
            return await usersCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdateUserAsync(User user)
        {
            var filter=filterBuilder.Eq(existingUser=> existingUser.id,user.id);
            await usersCollection.ReplaceOneAsync(filter,user);
        }


        public async Task UpdateUserStateAsync(User user)
        {
            var filter=filterBuilder.Eq(existingUser=> existingUser.id,user.id);
            var update=Builders<User>.Update.Set("state",user.state);
            await usersCollection.UpdateOneAsync(filter,update);
        }       
    }
}