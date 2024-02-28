using Lesson7.ClassProject;

namespace Lesson7 {
	internal class Program {
		static void Main(string[] args) {
			Vehicle vehicle = new Vehicle();
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
			((Vehicle)watercraft).StopEngine();
			
		}
	}
}
