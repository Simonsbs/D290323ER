using Lesson8.Logger;

namespace Lesson8 {
	internal class Program {
		static void Main(string[] args) {

			// Cant create new instance on interface
			// IVehicle vehicle = new IVehicle();
			/*
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
			*/
			// create an interface called "ISpeak" 
			// add Talk method and Name property to ISpeak
			// create a class called "Dog" that implements ISpeak and implements the contract
			// create instance of Dog and call the property and method
			/*
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
			*/

			// build an interface called "ILogger"
			// add a method called "Log" that takes a string
			// build a class called "FileLogger" that implements ILogger and writes to a file
			// build a class called ConsoleLogger that implements ILogger and writes to the console

			//File.WriteAllText(@"c:\temp\log.txt", "THIS IS A LINE OF TEXT!");
			// DateTime.Now.ToString();

			// create a List of ILogger and add an instance of each class
			// in a loop call the "Log" method on each item and verify results

			Console.WriteLine("------------------------");

			List<ILogger> loggers = new List<ILogger>();
			loggers.Add(new FileLogger());
			loggers.Add(new ConsoleLogger());

			foreach (ILogger logger in loggers) {
				logger.Log($"This is my message: {DateTime.Now}");
			}


			Car c1 = new Car("asd", 123);
			ElectricCar ec1 = new ElectricCar("asd", 123);
			HybridCar hc1 = new HybridCar("cvbcvb", 444);

			//IChargable chargable = c1;
			IChargable chargable2 = ec1;
			//IChargable chargable3 = hc1;

			//chargable2.Charge();

			List<Vehicle> vehicles = new List<Vehicle>();
			for (int i = 0; i < 10; i++) {
				if (i % 2 == 0) {
					vehicles.Add(new Vehicle("asd", 123));
					vehicles.Add(new Car("asd", 123));
				} else {
					vehicles.Add(new ElectricCar("asd", 123));
					vehicles.Add(new HybridCar("asd", 123));
				}
			}


			foreach (Vehicle vehicle in vehicles) {
				IChargable chargable = vehicle as IChargable;
				if (chargable == null) {
					continue;
				}

				chargable.Charge();
			}


			List<IChargable> chargables = new List<IChargable>();
			chargables.Add(new ElectricCar("", 123));
			chargables.Add(new ElectricTruck("", 123));
			chargables.Add(new Battery());

			foreach (IChargable chargable in chargables) {
				chargable.Charge();
			}
		}
	}
}
