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
			
			Circle c1 = new Circle();
			c1.Draw();
			c1.Draw2();
			c1.Draw3();

			Rectangle r1 = new Rectangle();
			r1.Draw();
			r1.Draw2();
			r1.Draw3();


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

		}
	}
}
