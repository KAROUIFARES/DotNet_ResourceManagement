using backend.Dtos;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("software")]
    [EnableCors("AllowOrigin")]
    public class SoftwareController:ControllerBase
    {
        public readonly SoftwareRepository repository;
        public  SoftwareController(SoftwareRepository repository){this.repository=repository;}
        //Get /Posts
        [HttpGet]
        public async Task<IEnumerable<softwareDto>> GetPreRequissAsync()
        {
            var software=(await repository.GetsoftwareeAsync())
                        .Select( software =>software.SoftwareDto());
            return software;
        }

        //Get /Post
        [HttpGet("{id}")]
        public async Task<ActionResult<softwareDto>> GetPostAsync(Guid id)
        {
            var software=await repository.GetsoftwareAsync(id);
            if(software is null){  return NotFound();  }
            return software.SoftwareDto();
        }

        //Post /User
        [HttpPost]
        public async Task<ActionResult<softwareDto>>CreatesoftwareAsync(Createsoftware softwareDto)
        {
            software software =new(){
                id=Guid.NewGuid(),
                nom=softwareDto.nom,
                version=softwareDto.version,
                state=softwareDto.state,
            };
            await repository.CreatesoftwareAsync(software);
            return CreatedAtAction(nameof(GetPostAsync),new{id=software.id},software.SoftwareDto());
        }

        //Update /Post/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatesoftwareAsync(Guid id,Updatesoftware softwareDto)
        {
            var existingsoftware= await repository.GetsoftwareAsync(id);
            if(existingsoftware is null){return NotFound();}
            software updatesoftware=existingsoftware with
            {
                nom=softwareDto.nom,
                version=softwareDto.version,
                state=softwareDto.state
            };
            await repository.UpdatesoftwareAsync(updatesoftware);
            return NoContent();
        }

        //UpdateState
        [Route("UpdateState")]
        [HttpPut]
        public async Task<ActionResult> UpdatePreRequisStateAsync(Guid id,UpdateStatesoftware softwareDto)
        {
            var existingsoftware=await repository.GetsoftwareAsync(id);
            if(existingsoftware is null){return NotFound();}
            software updateStatesoftware=existingsoftware with
            {
                state=softwareDto.state
            };
            await repository.UpdatesoftwareStateAsync(updateStatesoftware);
            return NoContent();
        }
    }
}