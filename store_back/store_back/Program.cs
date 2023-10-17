using Microsoft.EntityFrameworkCore;
using store_back.Models;
using store_back.REPOS;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<Data>(optios => {
    optios.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Market;Integrated Security=True;");
});

builder.Services.AddScoped<IProducts,ProductsRepo>();
builder.Services.AddScoped<IOrders,OrdersRepo>();
builder.Services.AddCors(corsOptions => corsOptions.AddPolicy("ReactAccess", corsPolicyBuilder =>
{
    corsPolicyBuilder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
}));
//builder.Services.AddScoped<IEmplyeeReposatory , EmplyeeReposatory>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("ReactAccess");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
