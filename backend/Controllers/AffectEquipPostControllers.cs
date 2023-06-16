using backend.Dto;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("AffecteEquipment")]
    [EnableCors("AllowOrigin")]
    public class AffecteEquiPostContorller :ControllerBase
    {
        private readonly AffectEquiPostRepository repository;
        public AffecteEquiPostContorller(AffectEquiPostRepository repository){this.repository=repository;}


        //Get/Employee's posts
        [HttpGet]
        public async Task<IEnumerable<EquipPostDto>> GetEmpPostsAsync()
        {
            var EquiPost=(await repository.GetEquipAsync())
                        .Select(EquiPost=>EquiPost.EquiPostDto());
            return EquiPost;
        }


        //rechercher la liste de poste par id
        [Route("GetEquiPost")]
        [HttpGet]
        public async Task<IEnumerable<GetEquiPostDto>> GetEmpPostListAsync(string id)
        {
            var EquiPost=(await repository.GetEquippPostAsync(id))
            .Select(EquiPost=>EquiPost.GetEquiPostDto());
            return EquiPost;
            
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<EquipPostDto>> GetEmpPostAsync(Guid id)
        {
            var EquiPost=await repository.GetEquiPostAsync(id);
            if(EquiPost is null){ return NotFound();}
            return EquiPost.EquiPostDto();
        }
     
       
        [HttpPost]
        public async Task<ActionResult<AffectEquipPostDto>> AffectePostAsync(AffectEquipPostDto affecteEquitDto)
        {
            AffectEquipPost EquiPost=new()
            {
                id=Guid.NewGuid(),
                PostId=affecteEquitDto.PostId,
                EquiId=affecteEquitDto.EquiId,
                type=affecteEquitDto.type
            };
            await repository.AffectEquipPostAsync(EquiPost);
            return CreatedAtAction(nameof(GetEmpPostAsync),new{id=EquiPost.id},EquiPost.EquiPostDto());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItemAsync(Guid id)
        {
            var existingEqui = await repository.GetEquiPostAsync(id);
            await repository.DeleteEquiAsync(id);
            return NoContent();
        }
        [Route("equipList")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipPostDto>>> GetEquipListAsync(string PostId, string equipid)
        {
            var EquipList = await repository.GetEquip( equipid,PostId);
            return Ok(EquipList);
        }
    }

     

}