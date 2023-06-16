using backend.Dto;
using backend.Dtos;
using backend.entities;
using backend.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers
{
    [ApiController]
    [Route("Employee")]
    [EnableCors("AllowOrigin")]
    public class EmployeeController :ControllerBase
    {
        private readonly EmployeeRepository repository;
        public EmployeeController(EmployeeRepository repository){this.repository=repository;}


        //Get /Employees
        [HttpGet]
        public async Task<IEnumerable<EmployeeDto>> GetEmployeesAsync()
        {
            var employee=(await repository.GetEmployeesAsync())
                        .Select(employee=>employee.EmpDto());
            return employee;
        }

        //Get /Employee
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDto>> GetEmployeeAsync(Guid id)
        {
            var employee=await repository.GetEmployeeAsync(id);
            if(employee is null){ return NotFound();}
            return employee.EmpDto();
        }


        //Post /Employee
        [HttpPost]
        public async Task<ActionResult<EmployeeDto>> CreateEmployeeAsync(CreateEmployeeDto employeeDto)
        {
            Employee employee=new()
            {
                id=Guid.NewGuid(),
                firstname=employeeDto.firstname,
                lastname=employeeDto.lastname,
                mail=employeeDto.mail,
                phone=employeeDto.phone,
                DateOccupation=employeeDto.DateOccupation,
                NumComptBanc=employeeDto.NumComptBanc,
                resignationDate=employeeDto.resignationDate,
                LaunchDate=employeeDto.LaunchDate,
            };
            await repository.CreateEmployeeAsync(employee);
            return CreatedAtAction(nameof(GetEmployeeAsync),new{id=employee.id},employee.EmpDto());
        }

        [Route("UpdateState/{id}")]
        [HttpPut]
        public async Task<ActionResult> UpdateEmployeeStateAsync(Guid id, updateEmployeeState empDto)
        {
            var existingEmp = await repository.GetEmployeeAsync(id);
            if (existingEmp is null){return NotFound();}
            Employee updatestateEmp = existingEmp with
            {
                resignationDate=empDto.resignationDate,
                state = empDto.state
            };

            await repository.UpdateEmployeeStateAsync(updatestateEmp);
            return NoContent();
            }

        //Update /User/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUserAsync(Guid id,UpdateEmployee employee)
        {
            var existingEmp=await repository.GetEmployeeAsync(id);
            if(existingEmp is null){return NotFound();}
            Employee updateEmp=existingEmp with
            {
                firstname=employee.firstname,
                lastname=employee.lastname,
                mail=employee.mail,
                phone=employee.phone,
                NumComptBanc=employee.NumComptBanc,
            };
            await repository.UpdateEmployeeAsync(updateEmp);
            return NoContent();
        }

    }
}