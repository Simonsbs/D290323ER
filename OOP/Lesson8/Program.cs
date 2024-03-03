namespace Lesson8 {
	internal class Program {
		static void Main(string[] args) {

			// Cant create new instance on interface
			// IVehicle vehicle = new IVehicle();

			Car car = new Car();
			car.Speed = 100;
			bool res = car.StartEngine();
			car.StopEngine(1);

			car.NumberOfDoors = 5;
			car.Honk();

			Console.WriteLine("------------------------");

			IVehicle iv1 = car;

			iv1.StartEngine();

			// cant see these, only in Car
			// iv1.NumbersOfDoors = 6;
			// iv1.Honk();

			IVehicle iv2 = new Car();

			iv2.StartEngine();

			// create an interface called "ISpeak" 
			// add Talk method and Name property to ISpeak
			// create a class called "Dog" that implements ISpeak and implements the contract
			// create instance of Dog and call the property and method

			Console.WriteLine("------------------------");

			IVehicle[] vehicles = new IVehicle[10];
			for (int i = 0; i < vehicles.Length; i++) {
				if (i % 2 == 0) {
					vehicles[i] = new Car();
				} else {
					vehicles[i] = new Truck();
				}
			}

			foreach (IVehicle vehicle in vehicles) {
				vehicle.StartEngine();
			}


			// build an interface called "ILogger"
			// add a method called "Log" that takes a string
			// build a class called "FileLogger" that implements ILogger and writes to a file
			// build a class called ConsoleLogger that implements ILogger and writes to the console

			// File.WriteAllText(@"c:\temp\log.txt", "THIS IS A LINE OF TEXT!");

			// create a List of ILogger and add an instance of each class
			// in a loop call the "Log" method on each item and verify results
		}
	}

	interface IVehicle {
		bool StartEngine();

		void StopEngine(int val);

		int Speed {
			get; set;
		}
	}

	class Truck : IVehicle {
		public bool StartEngine() {
			Console.WriteLine("Truck go!");
			return true;
		}

		public void StopEngine(int val) {
			Console.WriteLine("Truck Stop!");
		}

		public int Speed {
			get; set;
		}
	}

	class Car : IVehicle {
		public Car() {
			Console.WriteLine("Creating a Car");
		}

		public bool StartEngine() {
			Console.WriteLine("Car Started");

			return true;
		}

		public void StopEngine(int val) {
			Console.WriteLine("Car Stopped");
		}

		public int Speed {
			get; set;
		}

		public int NumberOfDoors {
			get; set;
		}

		public void Honk() {
			Console.WriteLine("Honk");
		}
	}
}
