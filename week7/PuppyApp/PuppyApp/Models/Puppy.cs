namespace PuppyApp.Models
{
    public class Puppy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool GoodBoy { get; set;} 

        public Owner Owner { get; set; }
    }
}
