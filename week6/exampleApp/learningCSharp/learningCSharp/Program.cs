using System.Numerics;

namespace learningCSharp
{
    internal class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            int num = (int) Math.Pow(2, 31);
            Console.WriteLine(num);
            string input = Console.ReadLine();
            Console.WriteLine(input);
        }

        static void DemoConditionals()
        {
            int x = 5;
            if(x == 5)
            {
                Console.WriteLine("X is 5");
            }

            bool isHappy = true;
            if(isHappy)
            {
                Console.WriteLine("Super happy");
            } 
            else 
            {
                Console.WriteLine("not happy");
            }

            switch(x)
            {
                case 5:
                case 6:
                    Console.WriteLine("It is 5 or 6");
                    break;
                case <= 7:
                    Console.WriteLine("It is 7 or lower");
                    break;
            }

            int y = x > 10 ? 4 : 38;
        }
    }
}