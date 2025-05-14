namespace product
{
    internal class Program
    {
        static void Main(string[] args)
        {
            product[] food = new foods[4];
            food[0] = new("milk", 4.9, "gh", 2024 / 08 / 01) ;
            food[1] = new("bread", 10, "uh") { ExpiryDate = 2024 / 08 / 20 };
            food[2] = new("welloCheese", 23.5, "gg") { ExpiryDate = 2024 / 10 / 01 };
            food[3] = new("Soap", 12.9, "Dc' Fisher");
            product[] cloth = [new("tyshert", 50, "china") ,
                new("sciny", 100, "china"),
                new("baby", 80, "china"),new("nb", 150, "china")];
            Console.WriteLine(cloth[2].GetHashCode());
        }

    }
}
 
