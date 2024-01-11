namespace PuppyApp.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Puppy> Puppies { get; set; } = new List<Puppy>();
    }
}
