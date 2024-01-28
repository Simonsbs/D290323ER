using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex2Solution {
	internal class Program {
		static void Main(string[] args) {

			int numberOfPairs = GetValidNumber("Please enter the amount of number pairs you want:");

			int[,] numbers = new int[numberOfPairs, 2];

			for (int i = 0; i < numberOfPairs; i++) {
				Console.WriteLine("----------------------------------------");
				numbers[i, 0] = GetValidNumber("Please enter the first number of pair " + (i + 1) + ":");
				numbers[i, 1] = GetValidNumber("Please enter the second number of pair " + (i + 1) + ":");
			}

			Console.WriteLine("----------------------------------------");

			for (int i = 0; i < numberOfPairs; i++) {
				int a = numbers[i, 0];
				int b = numbers[i, 1];
				double result = CalculateResult(a, b);
				Console.WriteLine($"[{a},{b}] = {result}");
			}

			Console.WriteLine("Finished... Bye!");
			Console.ReadKey();
		}

		static int GetValidNumber(string message) {
			Console.WriteLine(message);
			int userInput = 0;
			while (!int.TryParse(Console.ReadLine(), out userInput)) {
				Console.WriteLine("Input must be a number, try again...");
			}

			return userInput;
		}

		static double CalculateResult(int num1, int num2) {
			Console.WriteLine("Please select the operator to use: (+,-,/,*)");
			bool validOperatorEntered = false;
			string op = "";
			double result = 0;
			while (!validOperatorEntered) {
				op = Console.ReadLine();

				switch (op) {
					case "add":
					case "1":
					case "sum":
					case "+":
						result = num1 + num2;
						validOperatorEntered = true;
						op = "+";
						break;
					case "-":
					case "sub":
					case "2":
						result = num1 - num2;
						validOperatorEntered = true;
						op = "-";
						break;
					case "/":
					case "div":
					case "3":
						if (num2 == 0) {
							Console.WriteLine("Cannot divide by zero, pick a different operation (+,-,*)");
						} else {
							result = num1 / num2;
							validOperatorEntered = true;
							op = "/";
						}
						break;
					case "*":
					case "mul":
					case "4":
						result = num1 * num2;
						validOperatorEntered = true;
						op = "*";
						break;
					default:
						Console.WriteLine("Invalid operator selection, try again");
						break;
				}

			}

			return result;
		}
	}
}
