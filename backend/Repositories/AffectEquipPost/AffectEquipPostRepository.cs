using backend.entities;
namespace backend.Repository
{
     public interface AffectEquiPostRepository
    {
        Task<IEnumerable<AffectEquipPost>> GetEquipAsync();
        Task AffectEquipPostAsync(AffectEquipPost AffectEquiPost);
        Task<AffectEquipPost> GetEquiPostAsync(Guid id);
        Task <IEnumerable<AffectEquipPost>> GetEquippPostAsync(string id);
        Task DeleteEquiAsync(Guid id);
        Task <AffectEquipPost>GetEquip(string postid,string equipid);
    }
}