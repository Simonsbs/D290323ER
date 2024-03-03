namespace ZooApp;

class Eagle : FlightBird {
	public override void MakeSound() {
		Console.WriteLine($"{Name} the eagle goes: Screech!");
	}
}