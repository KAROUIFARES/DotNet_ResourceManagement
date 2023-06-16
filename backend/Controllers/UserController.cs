
using backend.Dto;
using backend.Dtos;
using backend.Entities;
using backend.Repository;
using login.Dtos;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("users")]
    [EnableCors("AllowOrigin")]
    public class UsersController:ControllerBase
    {
        private readonly UserRepository repository;
        public UsersController(UserRepository repository){this.repository=repository;}


        //Get /Users
        [HttpGet]
        public async Task<IEnumerable<UserDto>> GetUsersAsync()
        {
            var users=(await repository.GetUsersAsync())
                        .Select( user =>user.UsDto()); 
            return users;
        }

        //Get/User
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUserAsync(Guid id)
        {
            var user=await repository.GetUserAsync(id);
            if(user is null){return NotFound();}
            return user.UsDto();
        }

       
        //Post /User
        [HttpPost]
        public async Task<ActionResult<UserDto>>CreateUserAsync(CreateUserDto UserDto)
        {
            User user =new(){
                id=Guid.NewGuid(),
                firstName=UserDto.FirstName,
                lastName=UserDto.LastName,
                login=UserDto.login,
                pwd=UserDto.pwd,
                state=UserDto.state,
                image=UserDto.image,
                role=UserDto.role
                
            };
            await repository.CreateUserAsync(user);
            return (CreatedAtAction(nameof(GetUserAsync),new{id=user.id},user.UsDto()));
        }

        

        //Update /User/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUserAsync(Guid id,UpdateUserDto userDto)
        {
            var existingUser=await repository.GetUserAsync(id);
            if(existingUser is null){return NotFound();}
            User updateUser=existingUser with
            {
                firstName=userDto.firstName,
                lastName=userDto.lastName,
                pwd=userDto.pwd,
                state=userDto.state
            };
            await repository.UpdateUserAsync(updateUser);
            return NoContent();
        }
        //Authentification
        [Route("LoginUser")] 
        [HttpPost]
        public async Task<User> AuthentificationAsync(Login userLogin)
        {
            var userAvailable=await repository.AuthentificationAsync(userLogin.login);
            if(userAvailable!=null)
                return (userAvailable);
            else return (null);
        }

        //UpdateState
        [Route("UpdateState")]
        [HttpPut]
        public async Task<ActionResult> UpdateUserStateAsync(Guid id,UpdateUserStateDto userDto)
        {
            var existingUser=await repository.GetUserAsync(id);
            if(existingUser is null){return NotFound();}
            User updatestateUser=existingUser with
            {
                state=userDto.state
            };
            await repository.UpdateUserStateAsync(updatestateUser);
            return NoContent();
        }
    }
}