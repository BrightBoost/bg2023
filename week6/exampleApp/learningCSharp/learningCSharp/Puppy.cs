using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Puppy : Animal, Pet, IJonas, IComparable<Puppy>
    {
        public Puppy() : base("Rex") { }
        public int CutenessLevel { get; set; }

        public int CompareTo(Puppy? other)
        {
            if(other == null) return 1;
            if(this == other) return 0;
            if(this.Name == null) return -1;

            return Name.CompareTo(other.Name); 
        }

        public override void Eat()
        {
            Console.WriteLine("puppy is eating <3");
        }

        public void Play()
        {
            Console.WriteLine("puppy is playing 💖");
        }

        

    }
}
