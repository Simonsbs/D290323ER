using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods {
	internal class Program {
		static void Main(string[] args) {
			/*Console.WriteLine("Hello World");

			string m = "message 1";

			PrintAMessage(m);
			PrintAMessage("Simon is cool!");
			PrintAMessage(m + "-2");
			PrintAMessage(DateTime.Now.ToString());

			int result = AddTwoNumbers(2, 5);

			Console.WriteLine("result is " + result);
			*/

			int num = 5;
			Increment(ref num, 2);
			Increment(ref num, 4);

			/*
			 * Write a method called "DoubleIt"
			 * That takes an int value asa reference parameter and doubles it (no return)
			 * call the method 3 times each time printing the value of the variable
			 *
			 */

			int num2 = 10;
			DoubleIt(ref num2);
			Console.WriteLine(num2);
			DoubleIt(ref num2);
			Console.WriteLine(num2);
			DoubleIt(ref num2);
			Console.WriteLine(num2);

			



			Console.ReadKey();
		}


		static void PrintAMessage(string msg) {
			//string message = "Hello World from my method!";
			Console.WriteLine("The message i got is: " + msg);
		}

		static int AddTwoNumbers(int num1, int num2) {
			int sum = num1 + num2;
			Console.WriteLine("calculated the value");
			return sum;
		}

		static void Increment(ref int value, int by) {
			value = value + by;
		}

		static void DoubleIt(ref int value) {
			value = value * 2;
		}
	}
}
