using backend.entities;
using backend.Entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repository
{
    public class MongoDbAffectEquiPostRepository : AffectEquiPostRepository
    {
        private const string databaseName="backend";
        private const string collectionName="EquiPost";
        private readonly IMongoCollection<AffectEquipPost> EquiPostCollection ;
        private readonly FilterDefinitionBuilder<AffectEquipPost> filterBuilder=Builders<AffectEquipPost>.Filter;

        public MongoDbAffectEquiPostRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database=mongoClient.GetDatabase(databaseName);
            EquiPostCollection=database.GetCollection<AffectEquipPost>(collectionName);
        }

        public async Task AffectEquipPostAsync(AffectEquipPost AffectEquiPos)
        {
            await EquiPostCollection.InsertOneAsync(AffectEquiPos);
        }

        public async Task DeleteEquiAsync(Guid id)
        {
            var filter=filterBuilder.Eq(equi=>equi.id,id);
            await EquiPostCollection.DeleteOneAsync(filter);
        }

        public async Task<AffectEquipPost> GetEquip( string equipid,string postid)
        {
            var EquipPost = await EquiPostCollection.Find(EquipPost => EquipPost.PostId == postid &&EquipPost.EquiId==equipid).FirstOrDefaultAsync();
            return EquipPost;
        }

        public async Task<IEnumerable<AffectEquipPost>> GetEquipAsync()
        {
            return await EquiPostCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<AffectEquipPost> GetEquiPostAsync(Guid id)
        {
             var filter=filterBuilder.Eq(EquipPost=> EquipPost.id,id);
            return await EquiPostCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<AffectEquipPost>> GetEquippPostAsync(string id)
        {
            return await EquiPostCollection.Find(EquipPost=> EquipPost.PostId==id).ToListAsync();
        }
    }
}