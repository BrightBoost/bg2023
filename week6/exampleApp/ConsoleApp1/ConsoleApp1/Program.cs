namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What's your name?");
            string name = Console.ReadLine();
            DisplayGreeting(name);

        }

        static void DisplayGreeting(string name)
        {
            Console.WriteLine($"Hi {name}");
        }
    }
}