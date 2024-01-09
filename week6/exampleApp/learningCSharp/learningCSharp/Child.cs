using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Child
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string FavoriteToy { get; set; }

        public Child() { }

        public Child(string name)
        {
            Name = name;
        }

        public Child(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public Child(string name, int age, string favoriteToy)
        {
            Name = name;
            Age = age;
            FavoriteToy = favoriteToy;
        }
    }
}
