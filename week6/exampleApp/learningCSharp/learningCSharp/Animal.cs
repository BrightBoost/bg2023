using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Animal
    {
        public Animal(string name) 
        {
            Name = name;
        }
        public string Name { get; set; }

        public virtual void Eat()
        {
            Console.WriteLine("animal is eating");
        }

        public void Cuddle()
        {
            Console.WriteLine("puppy cuddles 💖");
        }
    }
}
