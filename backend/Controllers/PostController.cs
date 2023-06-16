using backend.Dto;
using backend.Dtos;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("posts")]
    [EnableCors("AllowOrigin")]
    public class PostController:ControllerBase
    {
        public readonly PostRepository repository;
        public  PostController(PostRepository repository){this.repository=repository;}
        //Get /Posts
        [HttpGet]
        public async Task<IEnumerable<PostDto>> GetPostsAsync()
        {
            var posts=(await repository.GetPostsAsync())
                        .Select( post =>post.PosDto());
            return posts;
        }

        //Get /Post
        [HttpGet("{id}")]
        public async Task<ActionResult<PostDto>> GetPostAsync(Guid id)
        {
            var post=await repository.GetPostAsync(id);
            if(post is null){  return NotFound();  }
            return post.PosDto();
        }

        //Post /User
        [HttpPost]
        public async Task<ActionResult<PostDto>>CreatePostAsync(CreatePostDto PostDto)
        {
            Post post =new(){
                id=Guid.NewGuid(),
                title=PostDto.title,
                hieraLevel=PostDto.hieraLevel,
            };
            await repository.CreatePostAsync(post);
            return CreatedAtAction(nameof(GetPostAsync),new{id=post.id},post.PosDto());
        }

        //Update /Post/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatePostAsync(Guid id,UpdatePostDto PostDto)
        {
            var existingPost= await repository.GetPostAsync(id);
            if(existingPost is null){return NotFound();}
            Post updatePost=existingPost with
            {
                title=PostDto.title,
                hieraLevel=PostDto.hieraLevel
            };
            await repository.UpdatePostAsync(updatePost);
            return NoContent();
        }

        //UpdateState
        [Route("UpdateState")]
        [HttpPut]
        public async Task<ActionResult> UpdatePostStateAsync(Guid id,UpdatetPostStateDdto PreRequisDto)
        {
            var existingPost=await repository.GetPostAsync(id);
            if(existingPost is null){return NotFound();}
            Post updatestatePost=existingPost with
            {
                state=PreRequisDto.state
            };
            await repository.UpdatePostStateAsync(updatestatePost);
            return NoContent();
        }
    }
}