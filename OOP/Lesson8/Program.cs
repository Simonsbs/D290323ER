namespace Lesson8 {
	internal class Program {
		static void Main(string[] args) {

			// Cant create new instance on interface
			// IVehicle vehicle = new IVehicle();

			Car car = new Car();
			car.Speed = 100;
			car.StartEngine();
			car.StopEngine();


			// create an interface called "ISpeak" 
			// add Talk method and Name property to ISpeak
			// create a class called "Dog" that implements ISpeak and implements the contract
			// create instance of Dog and call the property and method
		}
	}

	interface IVehicle {
		void StartEngine();
		void StopEngine();
		int Speed { get; set; }
	}

	class Car : IVehicle {
		public void StartEngine() {
			Console.WriteLine("Car Started");
		}

		public void StopEngine() {
			Console.WriteLine("Car Stopped");
		}

		public int Speed { get; set; }
	}
}
