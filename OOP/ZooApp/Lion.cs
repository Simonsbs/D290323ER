namespace ZooApp;

class Lion : Carnivore {
	public override void MakeSound() {
		Console.WriteLine($"{Name} the lion goes: ROAR!");
	}
	/*
	public override void DisplayInformation() {
		Console.WriteLine($"Type: Lion | Name: {Name} | Age: {Age}");
	}*/
}