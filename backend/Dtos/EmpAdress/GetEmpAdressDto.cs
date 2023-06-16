namespace backend.Dto;
public  record GetEmpAdress
{

    public string StreetAdress{get;init;}
    public string city{get;init;}
    public string province{get;init;}
    public int codePostal{get;init;}
} 