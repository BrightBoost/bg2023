
using DbExample.Models;

namespace DbExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            NorthwindContext context = new NorthwindContext();
            var categories = context.Categories.Where(c => c.CategoryName.StartsWith("B"));
            foreach( var category in categories )
            {
                Console.WriteLine(category.CategoryName);
            }
        }
    }
}