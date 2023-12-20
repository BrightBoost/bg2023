using System.Dynamic;
using System.Numerics;

namespace learningCSharp
{
    internal class Program
    {

        static void Main(string[] args)
        {
            /*Console.WriteLine("Hello, World!");
            int num = (int) Math.Pow(2, 31);
            Console.WriteLine(num);
            string input = Console.ReadLine();
            Console.WriteLine(input);*/

            /* decimal principalAmount;
             decimal interest;
             int duration;

             GetLoanDetails(out principalAmount, out interest, out duration);

             Console.WriteLine(principalAmount.ToString());
             Console.WriteLine(interest.ToString());
             Console.WriteLine(duration.ToString());

             DisplayValue("blabla");
             DisplayValue(3);*/

            //DateTimeStuff();
            MultiDimensionalArrayMoreStuff();
        }

        static void ArrayStuff()
        {
            string[] kids;
            kids = new string[] { "Jonas", "Gaia"};
            Console.WriteLine(Array.IndexOf(kids, "Gaia"));



            // one line? shorthand notation:
            string[] pets = { "bobby" };


        }

        // matrix style
        static void MultiDimensionalArrayStuff()
        {
            int[,] matrix = new int[3, 3];
            for(int i = 0; i < matrix.GetLength(0); i++)
            {
                for(int j = 0;  j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = i * j;
                }
            }
           
        }

        // jagged array style
        static void MultiDimensionalArrayMoreStuff()
        {
            int[][] ints = new int[3][];
            ints[0] = new int[] { 1, 2, 3, 4, 5 };
            ints[1] = new int[] { 1, 2, 3 };
            ints[2] = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            ints[2][7] = 22;

            Console.WriteLine(ints.Length + " Hope this is 3");
        }

        static void DisplayValue(string s)
        {
            Console.WriteLine("in str:" + s);
        }

        static void DisplayValue(int s)
        {
            Console.WriteLine("in int:" + s);
        }

        static void GetLoanDetails(out decimal pa, out decimal i, out int d)
        {
            pa = Convert.ToDecimal(Console.ReadLine());
            i = Convert.ToDecimal(Console.ReadLine());
            d = Convert.ToInt32((Console.ReadLine()));
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

        static void DateTimeStuff()
        {
            Console.Write("Enter payment due date: ");
            string str = Console.ReadLine();
            DateTime dueDate = Convert.ToDateTime(str);
            Console.WriteLine("Date read is: {0}", dueDate);
            
        }
    }
}