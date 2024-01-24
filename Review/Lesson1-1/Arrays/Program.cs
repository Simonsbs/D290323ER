using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays {
	internal class Program {
		static void Main(string[] args) {
			int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;

			int[] numbers2 = new int[10];
			int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

			//                    0       1       2
			string[] names = { "Simon", "Bob", "John", "Jane" };
			bool[] bools = { true, false, true, false };
			string[] dayOfWeek = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

			//names[1] = "Simon updated";

			numbers[5] = 8 + numbers[3];

			//Console.WriteLine(names[1]);
			//Console.WriteLine(names[2]);

			//Console.WriteLine(numbers[5]);

			for (int i = 0; i < numbers2.Length; i++) {
				Console.WriteLine(numbers2[i]);
			}


			for (int i = 0; i < names.Length; i++) {
				Console.WriteLine("the name at address " + i + " is: " + names[i]);
			}

			int i2 = 0;
			while (i2 < dayOfWeek.Length) {
				Console.WriteLine("the dow at address " + i2 + " is: " + dayOfWeek[i2]);
				if (i2 == 3) {
					Console.WriteLine("Humpday");
				}
				i2++;
			}

			int j = 0;
			foreach (string d in dayOfWeek) {
				Console.WriteLine("the dow is: " + d);
				j++;
				if (j == 3) {
					Console.WriteLine("Humpday");
				}
			}

			int[,] matrix1 = new int[10, 100];
			int[,] matrix2 = {
			//    0  1  2	
				{ 1, 2, 3 }, // 0
				{ 4, 5, 6 }, // 1
				{ 7, 8, 9 }  // 2
			};

			//matrix2.GetLength(0)

			//Console.WriteLine("5 = " + matrix2[1, 1]);



			Console.ReadKey();
		}
	}
}
