using System.Reflection.Metadata;

namespace Lesson2 {
	internal class Program {
		static void Main(string[] args) {
			//Employee e1 = new Employee(5000);
			//e1.CelebrateBirthday();

			//Employee e2 = new Employee("John", 30);



			// Build a class called User
			// add 3 fields (of different types)
			// build 4 constructors, one for each field (alone) and one for all fields together
			// make sure to chain the single constructors to the all fields constructor
			// build a method that prints out the user's details
			/*
			House h1 = new House("123 Main St", 3, true);
			Console.WriteLine("--------------------------------");
			House h2 = new House("456 Elm St");
			Console.WriteLine("--------------------------------");
			House h3 = new House(4);
			Console.WriteLine("--------------------------------");
			House h4 = new House(true);

			Bird b1 = new Bird("Polly", "Blue");
			*/

			Calculator c1 = new Calculator();
			int result = c1.Add(1, 2);
			Console.WriteLine(result);
			result = c1.Add(1, 2, 3);
			Console.WriteLine(result);
			result = c1.Add(1, 2, 3, 4, 5, 6, 7, 8);
		}
	}
}
