namespace backend.Dto;
public record updateEmployeeState
{
    public string resignationDate{get;init;}
    public Boolean state{get; init;}
}