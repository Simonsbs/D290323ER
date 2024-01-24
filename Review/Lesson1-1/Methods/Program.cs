using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods {
	internal class Program {
		static void Main(string[] args) {
			Console.WriteLine("Hello World");

			string m = "message 1";

			PrintAMessage(m);
			PrintAMessage("Simon is cool!");
			PrintAMessage(m + "-2");
			PrintAMessage(DateTime.Now.ToString());

			int result = AddTwoNumbers(2, 5);

			Console.WriteLine("result is " + result);

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
	}
}
