using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

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
            //MultiDimensionalArrayMoreStuff();
            //DirectoryInfoAndFileInfoExercise();
            // WriteFile();
            /*
                        Dog d = new Dog();
                        d.Name = "test";
                        Console.WriteLine(d.Name);
                        d.Name = "Max";
                        Console.WriteLine(d.Name);*/

            /*Animal a1 = new Animal("Max");
            a1.Eat();

            Puppy p1 = new Puppy();
            p1.Eat();
            p1.Play();

            Animal a2 = new Puppy();
            a2.Eat();
            ((Puppy)a2).Play();

            p1.Cuddle();*/

            //UsingLists();
            //FunWithLinq();
            string connStr = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Northwind;Integrated Security=True;Connect Timeout=30;Encrypt=False;";

            //ConnectToDb(connStr);
            //ConnectWithAppSettings();
            UseDataReader(connStr);
        }

        static void UseDataReader(string connStr)
        {
            SqlConnection conn = new SqlConnection(connStr);
            conn.Open();
            string query = "Select * from Employees";
            SqlCommand sqlCommand = new SqlCommand(query, conn);

            using(SqlDataReader reader = sqlCommand.ExecuteReader())
            {
                while(reader.Read())
                {
                    Console.WriteLine("Employee: " + reader["FirstName"] + " " + reader["LastName"]);
                }
            }
            
            conn.Close();
        }
        static void ConnectWithAppSettings()
        {
            ConfigurationBuilder builder = new ConfigurationBuilder();
            builder.SetBasePath(Directory.GetCurrentDirectory())
             .AddJsonFile("appsettings.json", optional: false,
             reloadOnChange: true);
            IConfiguration config = builder.Build();

            string? connStr = config["ConnectionStrings:Northwind"];
            if (connStr != null)
            {
                Console.WriteLine(connStr);
                ConnectToDb(connStr);
            }

        }
        static void ConnectToDb(string connStr)
        {
            SqlConnection conn = new SqlConnection(connStr);
            conn.Open();
            string query = "Select Count(*) from Employees";
            SqlCommand sqlCommand = new SqlCommand(query, conn);
            int nrOfEmployees = (int) sqlCommand.ExecuteScalar();
            Console.WriteLine(nrOfEmployees);
            conn.Close();
        }

        static void FunWithLinq()
        {
            List<int> list = new List<int> { 1, 23, 34, 232, 12, 3445, 6767, 32, 578, 354 };
            var nrQuery = from nr in list
                          where nr % 2 == 0 && nr > 300
                          orderby nr ascending
                          select nr;

            foreach (int nr in nrQuery)
            {
                Console.WriteLine(nr);
            }
        }

        static void UsingLists()
        {
            List<int> list = new List<int>();
            list.Add(1111);

            List<double> list2 = new List<double>();
            list2.Add(1.0);

            List<Puppy> puppies = new List<Puppy>();
            Puppy tomsPuppy = new Puppy();
            tomsPuppy.Name = "Otis";
            tomsPuppy.CutenessLevel = 10;

            Puppy lovroImaginaryPuppy = new Puppy();
            lovroImaginaryPuppy.Name = "A Snowflake";
            lovroImaginaryPuppy.CutenessLevel = 11;

            Puppy someRandomPuppy = new Puppy();
            someRandomPuppy.Name = "Max";
            someRandomPuppy.CutenessLevel = 8;

            puppies.Add(lovroImaginaryPuppy);
            puppies.Add(tomsPuppy);
            puppies.Add(someRandomPuppy);

            puppies.Sort((p1, p2) => p1.CutenessLevel - p2.CutenessLevel);

            foreach (Puppy puppy in puppies)
            {
                Console.WriteLine(puppy.Name);
            }

            puppies.Sort();

            foreach (Puppy puppy in puppies)
            {
                Console.WriteLine(puppy.Name);
            }


            list.Clear();
            list2.Capacity = 50;
            Console.WriteLine(list2.Count);

            list2.RemoveAt(0);

            double x = list2.SingleOrDefault(nr => nr == 5, 42);
            Console.WriteLine(x);


        }

        static void WriteFile()
        {
            string path = @"C:\Users\maaik\Documents\Training\BG\projects\week6\test.txt";
            string content = "Ho ho ho";
            try
            {
                using (StreamWriter sw = new StreamWriter(path, true))
                {
                    sw.WriteLine(content);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ho-ho: " + ex.Message);
            }
        }

        static void ReadFileWithUsing()
        {
            string path = @"C:\Users\maaik\Documents\Training\BG\projects\week6\test.txt";

            try
            {
                using (StreamReader sr = new StreamReader(path))
                {
                    while (!sr.EndOfStream)
                    {
                        string line = sr.ReadLine();
                        Console.WriteLine(line);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ho-ho: " + ex.Message);
            }

        }
        static void ReadFile()
        {
            string path = @"C:\Users\maaik\Documents\Training\BG\projects\week6\test.txt";

            StreamReader sr = null;
            try
            {
                sr = new StreamReader(path);
                while (!sr.EndOfStream)
                {
                    string line = sr.ReadLine();
                    Console.WriteLine(line);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ho-ho: " + ex.Message);
            }
            finally
            {
                if (sr != null)
                {
                    sr.Close();
                }
            }

        }

        static void DirectoryInfoAndFileInfoExercise()
        {
            string path = @"C:\Users\maaik\Documents\Training\BG\projects\week6";
            DirectoryInfo dir = new DirectoryInfo(path);

            // check if folder exists
            if (dir.Exists)
            {
                foreach (var f in dir.GetFiles())
                {
                    Console.WriteLine(f.Name);
                }
                string filePath = Path.Combine(path, "test.txt");
                FileInfo file = new FileInfo(filePath);
                if (file.Exists)
                {
                    Console.WriteLine("Already exists!");
                }
                else
                {
                    file.Create();
                }
            }
        }

        static void ArrayStuff()
        {
            string[] kids;
            kids = new string[] { "Jonas", "Gaia" };
            Console.WriteLine(Array.IndexOf(kids, "Gaia"));



            // one line? shorthand notation:
            string[] pets = { "bobby" };


        }

        // matrix style
        static void MultiDimensionalArrayStuff()
        {
            int[,] matrix = new int[3, 3];
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
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
            if (x == 5)
            {
                Console.WriteLine("X is 5");
            }

            bool isHappy = true;
            if (isHappy)
            {
                Console.WriteLine("Super happy");
            }
            else
            {
                Console.WriteLine("not happy");
            }

            switch (x)
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