namespace Lesson8;

internal interface IChargable {
	void Charge();
}

interface ICarryLoad {
	int MaxLoad { get; set; }
}

internal class Vehicle {
	public string Model { get; set; }
	public int Year { get; set; }

	public Vehicle(string model, int year) {
		Model = model;
		Year = year;
	}

	public virtual void DisplayInfo() {
		Console.WriteLine($"Model: {Model} | Year: {Year}");
	}

}

class Car : Vehicle {
	public Car(string model, int year) : 
		base(model, year) {
	}
}

class ElectricCar : Car, IChargable {
	public ElectricCar(string model, int year) : 
		base(model, year) {
	}

	public void Charge() {
		Console.WriteLine("Im charging the ElectricCar");
	}
}

class HybridCar : Car {
	public HybridCar(string model, int year) : 
		base(model, year) {
	}
}

class Truck : Vehicle, ICarryLoad {
	public Truck(string model, int year) : 
		base(model, year) {
	}

	public int MaxLoad {
		get;
		set;
	}
}

class ElectricTruck : Vehicle, IChargable, ICarryLoad {
	public ElectricTruck(string model, int year) : 
		base(model, year) {
	}

	public void Charge() {
		Console.WriteLine("Im charging the ElectricTruck");
	}

	public int MaxLoad {
		get;
		set;
	}
}


class Battery : IChargable {
	public void Charge() {
		Console.WriteLine("Im a battery and im charging");
	}
}