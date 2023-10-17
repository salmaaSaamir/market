using Microsoft.EntityFrameworkCore;

namespace store_back.Models
{
    public class Data:DbContext
    {
        public Data()
        { }
        public Data(DbContextOptions options) : base(options)
        { }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<Orders> Orders { get; set; }
    }
}
