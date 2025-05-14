using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace product
{
    internal class foods:product
    {
        public DateTime ExpiryDate { get; init; }
        public string StoragInstructions { get; init; }

        private int Code = 1000;
        public foods(  string n, double p, string m,DateTime expiryDate,string storagInstructions) :this(expiryDate,n,p,m)
        {
            StoragInstructions = storagInstructions;

        }
        public foods(string n,double p,string m,DateTime expiryDate) : base(n,p,m)
        {
            ExpiryDate = expiryDate;
            Code = 1000;
        }
        
       
    }
}
