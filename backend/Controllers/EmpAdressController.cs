using backend.Dto;
using backend.Dtos;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("EmpAdress")]
    [EnableCors("AllowOrigin")]
    public class EmpAdressContorller :ControllerBase
    {
        private readonly EmpAdressRepository repository;
        public EmpAdressContorller(EmpAdressRepository repository){this.repository=repository;}

        [HttpGet]
        public async Task<IEnumerable<EmpAdressDto>> GetEmpAdressAsync()
        {
            var EmpAdress=(await repository.GetEmpAdressAsync())
                        .Select( EmpAdress =>EmpAdress.EmpAdressDto()); 
            return EmpAdress;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmpAdressDto>> GetEmpAdresseAsync(Guid id)
        {
            var EmpAdress=await repository.GetEmpAdresseAsync(id);
            if(EmpAdress is null){return NotFound();}
            return EmpAdress.EmpAdressDto();
        }
        [HttpGet("EmpAdress/{EmpId}")]
        public async Task<ActionResult<GetEmpAdress>> GetEmpAdresseeAsync(string EmpId)
        {
            var EmpAdress=await repository.GetEmpAdressseAsync(EmpId);
            if(EmpAdress is null){return NotFound();}
            return EmpAdress.GetEmpAdressDto();
        }

        [HttpPost]
        public async Task<ActionResult<EmpAdressDto>>CreateUserAsync(CreateEmpAdress EmpAdressDto)
        {
            EmpAdress EmpAdress =new(){
                id=Guid.NewGuid(),
                EmpId=EmpAdressDto.EmpId,
                StreetAdress=EmpAdressDto.StreetAdress,
                city=EmpAdressDto.city,
                province=EmpAdressDto.province,
                codePostal=EmpAdressDto.codePostal,
               
                
            };
            await repository.CreateEmpAdressAsync(EmpAdress);
            return (CreatedAtAction(nameof(GetEmpAdressAsync),new{id=EmpAdress.id},EmpAdress.EmpAdressDto()));
        }

        //Update /User/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEmpAdressAsync(string id,UpdateEmpAdressDto empAdress)
        {
            var existingEmpAdress=await repository.GetEmpAdressseAsync(id);
            if(existingEmpAdress is null){return NotFound();}
            EmpAdress updateEmpAdr=existingEmpAdress with
            {
               StreetAdress=empAdress.StreetAdress,
                city=empAdress.city,
                province=empAdress.province,
                codePostal=empAdress.codePostal,
            };
            await repository.UpdateEmpAdressAsync(updateEmpAdr);
            return NoContent();
        }
    }
}