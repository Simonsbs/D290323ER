using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class Calculator {
		public int Add(int a, int b) {
			return a + b;
		}

		public int Add(int a, int b, int c) {
			return a + b + c;
		}

		public int Add(params int[] values) {
			return values.Sum();
		}
	}
}
