namespace ZooApp;

class Penguin : FlightlessBird {
	public override void MakeSound() {
		Console.WriteLine($"{Name} the penguin goes: Honk!");
	}
}