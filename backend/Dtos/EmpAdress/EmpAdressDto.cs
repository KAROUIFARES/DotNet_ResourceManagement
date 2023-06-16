namespace backend.Dtos;
public record EmpAdressDto
{
    public Guid id{get;init;}
    public string EmpId{get;init;}
    public string StreetAdress{get;init;}
    public string city{get;init;}
    public string province{get;init;}
    public int codePostal{get;init;}
}