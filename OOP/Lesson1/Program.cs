using ConsoleLogger = Lesson1.Logger;
using FileLogger = Other.SubName.AnotherName.YetAgain.Logger;

namespace Lesson1 {
	internal class Program {
		static void Main(string[] args) {
			//Employee employee = new Employee();
			//employee.name = "John Smith";
			//employee.DoWork();

			//Employee employee2 = new Employee();
			//employee2.name = "Jane Doe";
			//employee2.DoWork();


			// Create a class called Dog
			// Add 3 fields
			// Add a method that prints out the dog's details
			// Create 3 new Dog objects and call the method

			/*Dog d1 = new Dog();
			d1.name = "Fido";
			d1.breed = "Golden Retriever";
			d1.age = 3;
			d1.PrintDetails();

			Dog d1_1 = d1;

			d1_1.name = "Rex";
			d1_1.PrintDetails();
			*/
			// Add 2 new parameters that point to two of the previouse Dog objects
			// Change the name of one of the dogs, and the age of the other
			// Print the details of the dogs again

			/*
			Dog d2 = new Dog();
			d2.name = "Rex";
			d2.breed = "German Shepherd";
			d2.age = 5;
			d2.PrintDetails();

			Dog d3 = new Dog();
			d3.name = "Spot";
			d3.breed = "Dalmation";
			d3.age = 2;
			d3.PrintDetails();
			*/


			ConsoleLogger logger1 = new ConsoleLogger();
			logger1.Log("Hello World");

			FileLogger logger2 = new FileLogger();
			logger2.Log("Hello World");

			Other.SubName.AnotherName.YetAgain.Logger logger3 = new Other.SubName.AnotherName.YetAgain.Logger();
			logger3.Log("Hello World");


			// Create a new Dog class under a new namespace
			// have the new Dog class print out the dog's details to a file but
			// in a different format and different fields
			// create a new Dog object and call the method from both the new and old Dog classes
		}
	}
}
