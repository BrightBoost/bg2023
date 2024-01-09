using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Dog
    {
        private string _name;
        public string Name {
            get {
                return _name;
            }
            set {
                if(value == "Max")
                {
                    Console.WriteLine("There's too many dogs called Max already.");
                } 
                else
                {
                    _name = value;
                }
            }
        }
    }
}
