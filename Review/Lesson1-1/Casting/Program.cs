using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Casting {
	internal class Program {
		static void Main(string[] args) {
			int num = 5;

			// Implicit casting
			double d = num;

			double d2 = 5.0;

			// Explicit casting
			int num2 = (int)d2;

			Console.WriteLine("num2 = " + num2);


			long l = int.MaxValue + 10L;
			int i = (int)l;

			Console.WriteLine("i=" + i);

			int i2 = 1; 
			long l2 = i2;

			

			Console.ReadKey();
		}
	}
}
