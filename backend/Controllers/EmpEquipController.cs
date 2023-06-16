using backend.Dto;
using backend.Dtos;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("EmployeeEquipment")]
    [EnableCors("AllowOrigin")]
    public class EmpEquipController:ControllerBase
    {
        private readonly AffecterEmpPostRepository PostRepository;
        private readonly AffectEquiPostRepository EquipRepository;
        public EmpEquipController(AffecterEmpPostRepository PostRepository,AffectEquiPostRepository EquipRepository)
        {
            this.EquipRepository=EquipRepository;
            this.PostRepository=PostRepository;
        }

        // rechercher la liste des postes par Employee_Id
        [Route("GetEmpPost")]
        [HttpGet]
        public async Task<IEnumerable<GetEquiPostDto>> GetEmpPostListAsync(string id)
        {
            var EmpPost = (await PostRepository.GetEmppPostAsync(id))
                .Select(post => post.GetEmpPostDto()).ToList();

            List<GetEquiPostDto> equiPostList = new List<GetEquiPostDto>();
            foreach (var empPost in EmpPost)
            {
                var equiPost = await EquipRepository.GetEquippPostAsync(empPost.PostId);
                equiPostList.AddRange(equiPost.Select(ep => ep.GetEquiPostDto()));
            }

            return equiPostList;
        }

    }
}
