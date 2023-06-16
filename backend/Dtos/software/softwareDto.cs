namespace backend.Dtos;
public record softwareDto
{
    public Guid id{get;init;}
    public string nom{get;init;}
    public string version{get;init;}
    public Boolean state{get;init;}
}