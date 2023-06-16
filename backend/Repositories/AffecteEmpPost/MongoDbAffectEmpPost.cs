using backend.Entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbAffectEmpPostRepository : AffecterEmpPostRepository
    {
        private const string databaseName="backend";
        private const string collectionName="EmpPost";
        private readonly IMongoCollection<AffectePost> EmpPostCollection ;
        private readonly FilterDefinitionBuilder<AffectePost> filterBuilder=Builders<AffectePost>.Filter;

        public MongoDbAffectEmpPostRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            EmpPostCollection=database.GetCollection<AffectePost>(collectionName);
        }

        public async Task AffectePostAsync(AffectePost AffectPost){await EmpPostCollection.InsertOneAsync(AffectPost);}

        public async Task<AffectePost> GetEmpPostAsync(Guid id)
        {   var filter=filterBuilder.Eq(EmpPost=> EmpPost.id,id);
            return await EmpPostCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<AffectePost>> GetEmpPostsAsync(){ return await EmpPostCollection.Find(new BsonDocument()).ToListAsync(); }

        public async Task <IEnumerable<AffectePost>> GetEmppPostAsync(string id) 
        {return await EmpPostCollection.Find(EmpPost=> EmpPost.EmpId==id).ToListAsync();}

        public async Task DeletePostAsync(Guid id)
        {
            var filter=filterBuilder.Eq(post=>post.id,id);
            await EmpPostCollection.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<AffectePost>> GetEmpPost1(string id)
        {
            
            return await EmpPostCollection.Find(empPost=>empPost.PostId==id).ToListAsync();}

        public async Task<AffectePost> GetPost(string postid,string empid)
        {
            var empPost = await EmpPostCollection.Find(empPost => empPost.PostId == postid &&empPost.EmpId==empid).FirstOrDefaultAsync();
            return empPost;
        }

    }
}