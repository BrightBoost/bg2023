using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learningCSharp
{
    internal class Administration
    {
        private Administration() { }
        public static Administration AdministrationValue { get; set; }

        static Administration GetAdministration()
        {
            if(AdministrationValue != null) {
                return AdministrationValue;
            } 
            else
            {
                return new Administration();
            }
        }
    }
}
