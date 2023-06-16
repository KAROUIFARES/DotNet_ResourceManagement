using backend.Dto;
using backend.Dtos;
using backend.entities;
using backend.Entities;

namespace backend
{
    public static class Extensions
    {
        public static UserDto UsDto(this User user)
        {
            return new UserDto
            {
                id=user.id,
                firstName=user.firstName,
                lastName=user.lastName,
                login=user.login,
                pwd=user.pwd,
                state=user.state,
                image=user.image,
                role=user.role
            };
        }

        public static UpdateUserStateDto UpdateUserStateDto(this User user)
        {return new UpdateUserStateDto
        {
            state=user.state,
        };}
        public static UpdatePreRequisStateDto UpdatePreRequisStateDto(this preRequis preRequis)
        {return new UpdatePreRequisStateDto
        {
            state=preRequis.state,
        };}

         public static UpdatetPostStateDdto UpdatePostStateDto(this Post post)
        {return new UpdatetPostStateDdto
        {
            state=post.state,
        };}


        public static PostDto PosDto(this Post post)
        {
            return new PostDto
            {
                id=post.id,
                title=post.title,
                hieraLevel=post.hieraLevel,
                state=post.state
            };
        }

        public static EmployeeDto EmpDto(this Employee employee)
        {
            return new EmployeeDto
            {
                id=employee.id,
                firstname=employee.firstname,
                lastname=employee.lastname,
                mail=employee.mail,
                phone=employee.phone,
                NumComptBanc=employee.NumComptBanc,
                DateOccupation=employee.DateOccupation,
                resignationDate=employee.resignationDate,
                LaunchDate=employee.LaunchDate,
                state=employee.state
            };
        }
        public static softwareDto SoftwareDto(this software software)
        {
            return new softwareDto
            {
                id=software.id,
                nom=software.nom,
                version=software.version,
                state=software.state,
               
            };
        }
        public static UpdateStatesoftware UpdatesoftwareStateDto(this software software)
        {return new UpdateStatesoftware
        {
            state=software.state,
        };}

          public static updateEmployeeState UpdateEmployeeStateDto(this  Employee employee)
        {return new updateEmployeeState
        {
            resignationDate=employee.resignationDate,
            state=employee.state,
        };}

        public static preRequisDto PreReDto(this preRequis preRequis)
        {
            return new preRequisDto
            {
                id=preRequis.id,
                nom=preRequis.nom,
                marque=preRequis.marque,
                Modele=preRequis.Modele,
                Caract=preRequis.Caract,
                state=preRequis.state
                
            };
        }

        public static AffectePostDto EmpPostDto(this AffectePost EmpPost)
        {
            return new AffectePostDto
            {
                id=EmpPost.id,
                EmpId=EmpPost.EmpId,
                PostId=EmpPost.PostId
            };
        }
        public static GetEmpPostDto GetEmpPostDto(this AffectePost EmpPost)
        {
            return new GetEmpPostDto
            {
                PostId=EmpPost.PostId
            };
        }

         public static EquipPostDto EquiPostDto(this AffectEquipPost equipPost)
        {
            return new EquipPostDto
            {
                id=equipPost.id,
                PostId=equipPost.PostId,
                EquiId=equipPost.EquiId,
                type=equipPost.type
            };
        }

        public static GetEquiPostDto GetEquiPostDto(this AffectEquipPost EquiPost)
        {
            return new GetEquiPostDto
            {
                id=EquiPost.id,
                EquiId=EquiPost.EquiId,
                type=EquiPost.type
            };
        }

        public static EmpAdressDto EmpAdressDto(this  EmpAdress empAdress)
        {
            return new EmpAdressDto
            {
                id=empAdress.id,
                EmpId=empAdress.EmpId,
                StreetAdress=empAdress.StreetAdress,
                city=empAdress.city,
                province=empAdress.province,
                codePostal=empAdress.codePostal,
            };
        }
        public static GetEmpAdress GetEmpAdressDto(this EmpAdress empAdress)
        {
            return new GetEmpAdress
            {
                StreetAdress=empAdress.StreetAdress,
                city=empAdress.city,
                province=empAdress.province,
                codePostal=empAdress.codePostal,
            };
        }
    }
}