using backend.Dto;
using backend.Entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers
{
    [ApiController]
    [Route("AffectePost")]
    [EnableCors("AllowOrigin")]
    public class AffecteEmpPostContorller :ControllerBase
    {
        private readonly AffecterEmpPostRepository repository;
        public AffecteEmpPostContorller(AffecterEmpPostRepository repository){this.repository=repository;}

        //Get/Employee's posts
        [HttpGet]
        public async Task<IEnumerable<AffectePostDto>> GetEmpPostsAsync()
        {
            var EmpPost=(await repository.GetEmpPostsAsync())
                        .Select(EmpPost=>EmpPost.EmpPostDto());
            return EmpPost;
        }

        // rechercher la liste de poste par Employee Id
        [Route("EmpPostList/{EmpId}")]
        [HttpGet]
        public async Task<IEnumerable<GetEmpPostDto>> GetEmpPostListAsync(string EmpId)
        {
            var EmpPost=(await repository.GetEmppPostAsync(EmpId))
            .Select(EmpPost=>EmpPost.GetEmpPostDto());
            return EmpPost;
        }
        
        [Route("PostList/{PostId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AffectePostDto>>> GetPostListAsync(string PostId, string empid)
        {
            var postList = await repository.GetPost(PostId, empid);
            return Ok(postList);
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<AffectePostDto>> GetEmpPostAsync(Guid id)
        {
            var EmpPost=await repository.GetEmpPostAsync(id);
            if(EmpPost is null){ return NotFound();}
            return EmpPost.EmpPostDto();
        }
     
       
        [HttpPost]
        public async Task<ActionResult<AffectePostDto>> AffectePostAsync(CreateEmpPost affectePostDto)
        {
            AffectePost EmpPost=new()
            {
                id=Guid.NewGuid(),
                EmpId=affectePostDto.EmpId,
                PostId=affectePostDto.PostId,
            };
            await repository.AffectePostAsync(EmpPost);
            return CreatedAtAction(nameof(GetEmpPostAsync),new{id=EmpPost.id},EmpPost.EmpPostDto());
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItemAsync(Guid id)
        {
            var existingEqui = await repository.GetEmpPostAsync(id);
            await repository.DeletePostAsync(id);
            return NoContent();
        }
       
    }
}