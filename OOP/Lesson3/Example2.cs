using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal class Example2 {
		public static readonly int bNumber;
		public int aNumber = 10;

		// Const cant be an object
		//public const Data data1 = new Data();

		public readonly Data data2 = new Data();
		public Data data3 = new Data();

		public const bool isOK = true;
		public const string errorMessage = "NEW BAD INPUT!!!";

		public const double PI = 3.141113;


		public Example2() {
			// cant change a const after creation
			//aNumber = 7456;


		}

		public void DoStuff() {
			const int val = 10;



			//val = 11;
		}
	}
}
