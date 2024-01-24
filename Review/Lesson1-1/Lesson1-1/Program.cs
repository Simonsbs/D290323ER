using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson1_1 {
	internal class Program {
		static void Main(string[] args) {
			int age = 12;
			string name = "Simon";

			name = "Bob";
			name = "John";

			Console.WriteLine("My name is: " + name);

			name = "Simon";

			Console.WriteLine("My name is now: " + name);

			bool isAlive = true;

			isAlive = false;

			Console.WriteLine("am i alive: " + isAlive);

			double pi = 3.14;

			Console.WriteLine("pi: " + pi);

			double aNumber = 3;

			Console.WriteLine("aNumber: " + aNumber);

			int num1 = 10;
			int num2 = 20;
			int sum = num1 + num2;

			int sum2 = 10 + 30 + 40 + num2 + 60 + num1;
			int sum3 = 40 + sum;

			Console.WriteLine("sum3: " + sum3 + " !!!");

			Console.WriteLine(sum3 + 1);

			Console.WriteLine(sum3 - 8);

			Console.WriteLine(sum3 * 2);

			Console.WriteLine(sum3 / 2);

			age = 16;

			bool isOldEnough = age > 18;
			bool isSimon = name == "Simon";

			bool isOldEnoughAndSimon = isOldEnough && isSimon;
			bool isSimonOrOldEnough = isOldEnough || isSimon;
			/*
			Console.WriteLine("Please enter your age:");
			string userInput = Console.ReadLine();
			int userAge = int.Parse(userInput);

			if (userAge > 18) {
				Console.WriteLine("you are old enough");
				Console.WriteLine("Welcome to the club");
			} else {
				Console.WriteLine("you are not old enough");
				Console.WriteLine("come back in " + (18 - userAge) + " years");
			}

			for (int i = 0; i < userAge; i++) {
				Console.WriteLine(i + ". you are " + userAge + " years old");
			}
			*/
			/*
			Console.WriteLine("Pick a number:");
			string userInput2 = Console.ReadLine();
			int userNumber = int.Parse(userInput2);

			while (userNumber != 20) {
				Console.WriteLine("Wrong, try again");

				userInput2 = Console.ReadLine();
				userNumber = int.Parse(userInput2);
			}
			*/

			int userNumber = 0;
			do {
                Console.WriteLine("Enter your age:");
				string userInput2 = Console.ReadLine();
				userNumber = int.Parse(userInput2);
								
				if (userNumber < 0 || userNumber > 200) {
                    Console.WriteLine("Invalid age range!");
                }

            } while(userNumber < 0 || userNumber > 200);


			Console.WriteLine("bye bye");


			Console.ReadKey();
		}
	}
}
