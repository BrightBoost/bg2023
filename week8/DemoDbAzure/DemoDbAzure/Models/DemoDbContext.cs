using Microsoft.EntityFrameworkCore;

namespace DemoDbAzure.Models
{
    public class DemoDbContext: DbContext
    {
        public DemoDbContext()
        {

        }

        public DemoDbContext(DbContextOptions<DemoDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
