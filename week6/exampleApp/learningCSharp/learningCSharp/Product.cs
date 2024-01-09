using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Product
    {
        public string Name { get; set; }

        public Product(string name, string description)
        {
            Name = name;
            this.description = description;
        }

        private string description;

        public string GetDescription() { return description; }
        public void SetDescription(string description) { this.description = description;}

    }
}
