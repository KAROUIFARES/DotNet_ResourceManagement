using backend.Dto;
using backend.Dtos;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("hardware")]
    [EnableCors("AllowOrigin")]
    public class PreRequisController:ControllerBase
    {
        public readonly PreRequisRepository repository;
        public  PreRequisController(PreRequisRepository repository){this.repository=repository;}
        //Get /Posts
        [HttpGet]
        public async Task<IEnumerable<preRequisDto>> GetPreRequissAsync()
        {
            var preRequis=(await repository.GetPreRequissAsync())
                        .Select( preRequis =>preRequis.PreReDto());
            return preRequis;
        }

        //Get /Post
        [HttpGet("{id}")]
        public async Task<ActionResult<preRequisDto>> GetPostAsync(Guid id)
        {
            var preRequis=await repository.GetPreRequisAsync(id);
            if(preRequis is null){  return NotFound();  }
            return preRequis.PreReDto();
        }

        //Post /User
        [HttpPost]
        public async Task<ActionResult<preRequisDto>>CreatePreRequisAsync(CreatePreRequisDto preRequisDto)
        {
            preRequis preRequis =new(){
                id=Guid.NewGuid(),
                nom=preRequisDto.nom,
                marque=preRequisDto.marque,
                Modele=preRequisDto.Modele,
                Caract=preRequisDto.Caract,
                state=preRequisDto.state
            };
            await repository.CreatePreRequisAsync(preRequis);
            return CreatedAtAction(nameof(GetPostAsync),new{id=preRequis.id},preRequis.PreReDto());
        }

        //Update /Post/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatePreRequisAsync(Guid id,UpdatePreRequisDto preRequisDto)
        {
            var existingPreRequis= await repository.GetPreRequisAsync(id);
            if(existingPreRequis is null){return NotFound();}
            preRequis updatePreRequis=existingPreRequis with
            {
                nom=preRequisDto.nom,
                marque=preRequisDto.marque,
                Modele=preRequisDto.Modele,
                Caract=preRequisDto.Caract,
                state=preRequisDto.state
            };
            await repository.UpdatePreRequisAsync(updatePreRequis);
            return NoContent();
        }

        //UpdateState
        [Route("UpdateState")]
        [HttpPut]
        public async Task<ActionResult> UpdatePreRequisStateAsync(Guid id,UpdatePreRequisStateDto PreRequisDto)
        {
            var existingPreRequis=await repository.GetPreRequisAsync(id);
            if(existingPreRequis is null){return NotFound();}
            preRequis updatestatePreRequis=existingPreRequis with
            {
                state=PreRequisDto.state
            };
            await repository.UpdatePreRequisStateAsync(updatestatePreRequis);
            return NoContent();
        }
    }
}