using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal static class Tools {
		public static int count;

		static Tools() {
			count = 10;
		}

		public static void IncrementCount() {
			count++;
		}

		public static void DecrementCount() {
			count--;
		}

		public static bool IsEven(int number) {
			return number % 2 == 0;
		}

		public static bool IsOdd(int number) {
			return number % 2 != 0;
		}
	}
}
