using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace product
{
    internal class product
    {
         
        public static int Code { get; private set; }
        public string ProductName { get; set; }
        public double Price { get; set; }
        public string Manufacturer { get; set; }
        

        public product( ) {
             ++Code ;
        }
        public product(string productName, double price, string manufacturer  ) : this( )
        {
            ProductName = productName;
            Price = price;
            Manufacturer = manufacturer;
        }
        

        
    }
}
