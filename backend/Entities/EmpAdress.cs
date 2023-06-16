namespace backend.entities;
public record EmpAdress
{
    public Guid id{get;init;}
    public string EmpId{get;init;}
    public string StreetAdress{get;init;}
    public string city{get;init;}
    public string province{get;init;}
    public int codePostal{get;init;}

    internal object Select(Func<object, object> value)
    {
        throw new NotImplementedException();
    }
}