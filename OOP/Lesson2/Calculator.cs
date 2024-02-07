using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class Calculator {
		public int Add(int a, int b) {
			Console.WriteLine("before");
			int[] vals = new int[] { a, b };
			int result = Add(vals);
			Console.WriteLine("after");
			
			return result;

			// return a + b;
		}

		public int Add(int a, int b, int c) {
			// example to call the 2 param Add method
			return Add(Add(a, b), c);

			// example to call the 3 param Add method (recursive)
			// return Add(a, b, c);

			// example to call the params Add method
			Console.WriteLine("before");
			int[] vals = new int[] { a, b, c };
			int result = Add(vals);
			Console.WriteLine("after");
			return result;
		}

		public int Add(params int[] values) {
			return values.Sum();
		}
	}
}
