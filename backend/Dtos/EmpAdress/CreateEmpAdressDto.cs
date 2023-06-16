namespace backend.entities;
public record CreateEmpAdress
{
    public string EmpId{get;init;}
    public string StreetAdress{get;init;}
    public string city{get;init;}
    public string province{get;init;}
    public int codePostal{get;init;}
}