 using backend.Repository;
using backend.Settings;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options=>
{
   options.SuppressAsyncSuffixInActionNames=false; 
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
BsonSerializer.RegisterSerializer(new GuidSerializer(BsonType.String));
// BsonSerializer.RegisterSerializer(new DateTimeOffsetSerializer(BsonType.String));
builder.Services.AddCors(options =>
      {
          options.AddPolicy(
            name:"AllowOrigin",
                            builder => {builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
      });
        });

builder.Services.AddSingleton<IMongoClient>(serviceProvider=>
{
    var settings= builder.Configuration.GetSection(nameof(MongoDbSettings)).Get<MongoDbSettings>();
    return new MongoClient(settings.ConnectionString);
});
builder.Services.AddSingleton<EmployeeRepository,MongoDbEmployeeRepository>();
builder.Services.AddSingleton<PostRepository,MongoDbPostRepository>();
builder.Services.AddSingleton<UserRepository,MongoDbUserRepository>();
builder.Services.AddSingleton<PreRequisRepository,MongoDbPreRequisRepository>();
builder.Services.AddSingleton< AffecterEmpPostRepository,MongoDbAffectEmpPostRepository>();
builder.Services.AddSingleton< AffectEquiPostRepository,MongoDbAffectEquiPostRepository>();
builder.Services.AddSingleton< EmpAdressRepository,MongoDbEmpAdressRepository>();
builder.Services.AddSingleton< SoftwareRepository,MongoDbSoftwareRepository>();


// builder.Services.AddSingleton<AffecterPostRepository,MongoDbAffectPostRepository >();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors("AllowOrigin");

app.Run();
