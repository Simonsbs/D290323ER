
using Lesson7.HWSolution;
using Lesson7.PolyDemo;
using Lesson7.PolyEx;

namespace Lesson7 {
	internal class Program {
		static void Main(string[] args) {
			/*Vehicle vehicle = new Vehicle();
			Car car = new Car();
			Truck truck = new Truck();
			//Watercraft watercraft = new Watercraft();
			Speedboat speedboat = new Speedboat();


			vehicle.StartEngine();
			vehicle.StopEngine();
			car.StartEngine();
			car.StopEngine();
			truck.StartEngine();
			truck.StopEngine();
			speedboat.StartEngine();
			speedboat.StopEngine();

			Console.WriteLine("----------------------------");

			Vehicle vehicleShared = car;
			vehicleShared.StartEngine();
			vehicleShared.StopEngine();
			vehicleShared = truck;
			vehicleShared.StartEngine();
			vehicleShared.StopEngine();
			vehicleShared = speedboat;
			vehicleShared.StartEngine();
			vehicleShared.StopEngine();

			Console.WriteLine("----------------------------");

			Watercraft watercraft = speedboat;
			watercraft.StartEngine();
			watercraft.StopEngine();
			((Vehicle)watercraft).StopEngine();*/

			/*
			TeslaModelS tesla = new TeslaModelS("Tesla", "Model S", 2019, 80);
			FordMustang ford = new FordMustang("Ford", "Mustang", 1980, "V8");

			tesla.DisplayInformation();
			ford.DisplayInformation();

			Vehicle vTesla = tesla;
			Vehicle vFord = ford;

			vTesla.DisplayInformation();
			vFord.DisplayInformation();
			*/

			/*
			Circle c = new Circle();
			Triangle t = new Triangle();
			Shape s = c;
			Shape s2 = t;
			Shape s3 = new Circle();
			*/

			/*
			Triangle[] triangles = new Triangle[5];
			for (int i = 0; i < triangles.Length; i++) {
				triangles[i] = new Triangle();
			}
			
			foreach (Triangle triangle in triangles) {
				triangle.Draw();
			}

			// ----------------------------------------------

			Circle[] circles = new Circle[5];
			for (int i = 0; i < circles.Length; i++) {
				circles[i] = new Circle();
			}
			
			foreach (Circle circle in circles) {
				circle.Draw();
			}
			*/

			/*
			Shape[] shapes = new Shape[15];
			for (int i = 0; i < shapes.Length; i++) {
				if (i % 2 == 0) {
					shapes[i] = new Triangle();
				} else if (i % 3 == 0) {
					shapes[i] = new Circle();
				} else {
					shapes[i] = new Square();
				}
			}

			foreach (Shape shape in shapes) {
				shape.Draw();
			}
			*/

			/*
			 *
			   1. Create a Three-Level Inheritance Hierarchy:
			       - Create an abstract class named `BaseItem` with an abstract method `ExecuteCommonAction()`.
			       - Create three concrete classes: `LevelOneItem`, `LevelTwoItem`, and `LevelThreeItem`. 
						Each class should inherit from the previous level, starting with `LevelOneItem` 
						inheriting from `BaseItem`, and so on.
			       - Implement the `ExecuteCommonAction` method in each concrete class to print a unique 
						message to the console, indicating which level's action is being executed.
			   
			   2. Implement a User Interface in the Console:
			       - In your `Main` method, create a loop that displays a menu for the user to add items 
						to an array. The menu should allow the user to add a `LevelOneItem`, 
						`LevelTwoItem`, or `LevelThreeItem` to the array, or to finish adding items.
			       - Use a `BaseItem` array to store the items.
			       - For each option (1, 2, or 3), create an instance of the respective item 
						(`LevelOneItem`, `LevelTwoItem`, or `LevelThreeItem`) and add it to the list. 
						If the user chooses to finish (option 0), exit the loop.
			   
			   3. Process the Array Items:
			       - After the user finishes adding items, iterate through the list and call 
						`ExecuteCommonAction` on each item. This will demonstrate polymorphism by calling 
						the respective method implementation for each object, even though they are being 
						stored in a `BaseItem` list.
			   
			 *
			 *
			 */


			Console.WriteLine("How many items do you want?");
			if (!int.TryParse(Console.ReadLine(), out int arrayLength)) {
				Console.WriteLine("Invalid value, using default (10)");
				arrayLength = 10;
			}

			BaseItem[] items = new BaseItem[arrayLength];

			for (int i = 0; i < arrayLength; i++) {
				Console.WriteLine($"What level item do you want in position {i}");
				string input = Console.ReadLine();

				switch (input) {
					case "1":
						items[i] = new LevelOneItem();
						break;
					case "2":
						items[i] = new LevelTwoItem();
						break;
					default:
						items[i] = new LevelThreeItem();
						break;
				}
			}

			Console.WriteLine("The resulting list is:");
			foreach (BaseItem item in items) {
				item.ExecuteCommonAction();
			}
		}
	}
}
