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
			/*
			Calculator c1 = new Calculator();
			int result = c1.Add(1, 2);
			Console.WriteLine(result);
			result = c1.Add(1, 2, 3);
			Console.WriteLine(result);
			result = c1.Add(1, 2, 3, 4, 5, 6, 7, 8);
			*/

			// Create a class called AreaCalculator
			// write 3 methods called "CalculateArea" that take 1, 2 and 3 parameters and returns a double
			// first: calculate circle takes a sing double parameter called radius
			// second: calculate rectangle takes 2 double parameters called length and width
			// third: calculate triangle takes 3 double parameters called base, height and boolean isTriangle
			// create the class and call each method and print out the result
			// 
			// circle: Math.PI * radius ^2
			// rectangle: length * width
			// triangle: 0.5 * base * height

			AreaCalculator ac = new AreaCalculator(Math.PI);
			
			// call the method that takes 1 parameter and calculate the area of a circle
			double answer = ac.CalculateArea(10);
			Console.WriteLine("circle are is: " + answer);
			
			// call the method that takes 2 parameters and calculate the area of a rectangle
			answer = ac.CalculateArea(10, 20);
			Console.WriteLine("rectangle are is: " + answer);

			// call the method that takes 3 parameters and calculate the area of a triangle
			answer = ac.CalculateArea(10, 20, true);
			Console.WriteLine("triangle are is: " + answer);

		}
	}
}
