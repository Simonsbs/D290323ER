namespace ZooApp;

class Lion : Carnivore {
	public override void MakeSound() {
		Console.WriteLine($"{Name} the lion goes: ROAR!");
	}
}