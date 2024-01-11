using Microsoft.EntityFrameworkCore;

namespace PuppyApp.Models
{
    public class PuppyDbContext : DbContext
    {
        public DbSet<Puppy> Puppies { get; set; }
        public DbSet<Owner> Owners { get; set; }

        public PuppyDbContext()
        {
        }

        public PuppyDbContext(DbContextOptions<PuppyDbContext> options)
        : base(options)
        {
        }

        // 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Owner>(e =>
            {
                e.HasMany(e => e.Puppies)
                .WithOne(e => e.Owner);
            });
        }

    }
}
