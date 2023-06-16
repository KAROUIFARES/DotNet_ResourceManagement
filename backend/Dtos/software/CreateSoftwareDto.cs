using System.ComponentModel.DataAnnotations;

namespace backend.entities;
public record Createsoftware
{

    public string nom{get;init;}
 
    public string version{get;init;}

    public Boolean state{get;init;}
}