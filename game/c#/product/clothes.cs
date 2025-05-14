using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace product
{
    internal class clothes:product
    {
        public string Size { get; init; }
        public string WashingInstructions { get; init; }
        int Code = foods.Code;
        public clothes(string n, double p, string m,string size, string washingInstructions)
            :this(n,p,m, size)
        { 
            WashingInstructions = washingInstructions;
           
            
        }
        public clothes(string n, double p, string m, string size)
            : base(n, p, m)
        {
             Size = size;
        }
    }
}
