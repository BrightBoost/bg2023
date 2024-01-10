using EFNorthwindSearch.Models;

namespace EFNorthwindSearch
{
    internal class Program
    {
        static NorthwindContext northwindContext = new NorthwindContext();

        static void Main(string[] args)
        {
            PromptingUserForCategory();
        }

        static void PromptingUserForCategory()
        {
            Console.WriteLine("What category do you want?");
            DisplayAllCategories();
            string category = Console.ReadLine();
            DisplayProductsInCategory(category);
        }

        static void DisplayAllCategories()
        {
            foreach(var category in northwindContext.Categories)
            {
                Console.WriteLine(category.CategoryName);
            }
        }

        static void DisplayProductsInCategory(string category)
        {

            var products = northwindContext.Categories
                .Where(c => c.CategoryName == category)
                .SelectMany(c => c.Products);

            foreach (var product in products)
            {
                Console.WriteLine(product.ProductName + " Unitprice " + product.UnitPrice);
            }

        }
    }
}