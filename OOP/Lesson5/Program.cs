using System.Reflection.Metadata;

namespace Lesson5 {
	internal class Program {
		static void Main(string[] args) {
			/*
			Vehicle v1 = new Vehicle("hundai", "i20", 2005);
			
			Console.WriteLine($"{v1.Make} | {v1.Model} | {v1.Year}");

			Truck t1 = new Truck("mack", "big", 2015);
			
			Console.WriteLine($"{t1.Make} | {t1.Model} | {t1.Year}");

			Car c1 = new Car("volvo", "x2", 1999);
			
			Console.WriteLine($"{c1.Make} | {c1.Model} | {c1.Year}");
			*/

			//Shape s1 = new Shape();
			//s1.Draw();
			/*
			Circle c1 = new Circle();
			c1.Draw();
			c1.Draw2();
			c1.Draw3();

			Rectangle r1 = new Rectangle();
			r1.Draw();
			r1.Draw2();
			r1.Draw3();
			*/

			/*
			 * Develop an abstract base class for shapes with an abstract method to calculate the area.
			 * Then, implement derived classes for specific shapes (e.g., Circle, Rectangle) that calculate their area.
			   
			   Abstract Base Class - Shape:
			   Properties: None specific, but derived classes will have their own properties.
			   Abstract Method: CalculateArea() (returns a double, calculates the shape's area)
			   
			
				Derived Classes:
			
				Circle: Inherits from Shape
			   Property: Radius (double)
			   Implements CalculateArea() to calculate the area of the circle (π * Radius * Radius)
			   
				Rectangle: Inherits from Shape			   
			   Properties: Width (double), Height (double)
			   Implements CalculateArea() to calculate the area of the rectangle (Width * Height)
			   
				Square: Inherits from Rectangle
			    Note: For a square, width and height are equal. You can require only one side length parameter for the 
				constructor and pass it to the base class for both width and height.
			   Uses the base class's CalculateArea() method directly, or optionally overrides it if necessary for clarification.
			   
			Exercise Tasks:
			   Implement the abstract class Shape with the abstract method CalculateArea().
			   Implement the derived classes Circle, Rectangle, and Square, including the necessary properties and the 
			CalculateArea() method.
			   In the Main method, create instances of each shape with given dimensions.
			   Call the CalculateArea() method for each shape instance and print the results to demonstrate that each 
			shape calculates its area correctly.
			   
			
			Additional Challenge (Optional):
			   Add input validation in the setters of the properties to ensure all dimensions are positive numbers.
			   Implement a constructor in each derived class to initialize the shape's properties.
			 */


			//Shape s1 = new Shape();

			Circle c1 = new Circle(5);
			double result = c1.CalculateArea();
			Console.WriteLine($"the c1 result is: {result}");

			Rectangle r1 = new Rectangle(10,20);
			result = r1.CalculateArea();
			Console.WriteLine($"the r1 result is: {result}");

			Square s1 = new Square(50);
			result = s1.CalculateArea();
			Console.WriteLine($"the s1 result is: {result}");

			Square s2 = new Square();

			/*
			
				Modify the abstract base class to include a virtual method for printing the shape's details, 
				in addition to the abstract method for area calculation. Derived classes will then override 
				this method to provide specific information about each shape.

				Abstract Base Class - Shape:
				Abstract Method: CalculateArea() (returns a double, calculates the shape's area)
				Virtual Method: PrintDetails() (prints basic details about the shape)
				
				Modifications for Derived Classes:
				
				Circle:
				Overrides PrintDetails() to print details specific to the circle, including its radius and area.
			
				Rectangle:
				Overrides PrintDetails() to print details specific to the rectangle, including its width, height, and area.
				
				Square:
				Overrides PrintDetails(), considering that Square is a special case of Rectangle, 
				to print details specific to the square, including its side length and area.
				
				Implementation Steps:
				
				Shape Class:
				Add a virtual method PrintDetails() that prints "This is a shape." or any generic information about shapes.
				Circle, Rectangle, Square Classes:

				Implement the CalculateArea() method as previously defined.
				Override the PrintDetails() method to include shape-specific information. For example,
				for Circle, it might print "Circle: Radius = [radius], Area = [area]."


			 */




		}
	}
}
