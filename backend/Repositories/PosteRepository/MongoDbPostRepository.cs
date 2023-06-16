using backend.entities;
using MongoDB.Bson;
using MongoDB.Driver;
namespace backend.Repository
{
    public class MongoDbPostRepository : PostRepository
    {
        private const string databaseName="backend";
        private const string collectionName="Posts";
        private readonly IMongoCollection<Post> PostsCollection ;
        private readonly FilterDefinitionBuilder<Post> filterBuilder=Builders<Post>.Filter;
        public MongoDbPostRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            PostsCollection=database.GetCollection<Post>(collectionName);
        }

        public async Task CreatePostAsync(Post post)
        {
            await PostsCollection.InsertOneAsync(post);
        }

        public async Task<Post> GetPostAsync(Guid id)
        {
            var filter=filterBuilder.Eq(post=> post.id,id);
            return await PostsCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<Post>> GetPostsAsync()
        {
            return await PostsCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdatePostAsync(Post post)
        {
            var filter=filterBuilder.Eq(existingPost=> existingPost.id,post.id);
            await PostsCollection.ReplaceOneAsync(filter,post);
        }

        public async Task UpdatePostStateAsync(Post post)
        {
            var filter=filterBuilder.Eq(existingPre=> existingPre.id,post.id);
            var update=Builders<Post>.Update.Set("state",post.state);
            await PostsCollection.UpdateOneAsync(filter,update);
        }
    }
    }
