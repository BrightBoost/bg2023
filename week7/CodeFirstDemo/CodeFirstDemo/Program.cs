using CodeFirstDemo.Models;
using Microsoft.EntityFrameworkCore;

namespace CodeFirstDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            MyDbContext myDbContext = new MyDbContext();

            Book b1 = new Book();
            b1.Description = "Test";
            b1.Title = "Test";
            Author author = new Author();
            author.Name = "Maaike";
            b1.Author = author;
            myDbContext.Books.Add(b1);
            myDbContext.SaveChanges();

            foreach (var book in myDbContext.Books.Include(b => b.Author))
            {
                Console.WriteLine(book.Title);
                Console.WriteLine(book.Author.Id);
            }
        }
    }
}