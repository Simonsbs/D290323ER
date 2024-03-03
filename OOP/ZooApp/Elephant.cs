namespace ZooApp;

class Elephant : Herbivore {
	public override void MakeSound() {
		Console.WriteLine($"{Name} the elephant goes: Trumpet!");
	}
}