namespace ZooApp {
	internal class Program {
		static List<Animal> animals = new List<Animal>();

		static void Main(string[] args) {
			bool isRunning = true;
			while (isRunning) {
				Console.WriteLine("What do you want to do:");
				Console.WriteLine("1. Add and animal");
				Console.WriteLine("2. Interact with animals");
				Console.WriteLine("3. display animals");
				Console.WriteLine("E. Exit");

				string choice = Console.ReadLine();
				switch (choice.ToUpper()) {
					case "1":
						AddAnimal();
						break;
					case "2":
						InteractWithAnimals();
						break;
					case "3":
						DisplayAnimals();
						break;
					case "E":
						isRunning = false;
						break;
					default:
						Console.WriteLine("Invalid selection, try again");
						break;
				}
			}
		}

		private static void DisplayAnimals() {
			foreach (Animal animal in animals) {
				animal.DisplayInformation();
			}
		}

		private static void InteractWithAnimals() {
			Console.WriteLine("Enter the name of the animal to speak with:");
			string name = Console.ReadLine();
			foreach (Animal animal in animals) {
				if (animal.Name == name) {
					animal.MakeSound();
					return;
				}
			}

			Console.WriteLine($"Animal {name} not found");
		}

		private static void AddAnimal() {
			Console.WriteLine("What animal do you want to add:");
			Console.WriteLine("1. Lion");
			Console.WriteLine("2. Elephant");
			Console.WriteLine("3. Eagle");
			Console.WriteLine("4. Penguin");

			Animal animalToAdd = null;
			string selection = Console.ReadLine();
			switch (selection) {
				case "1":
					animalToAdd = new Lion();
					break;
				case "2":
					animalToAdd = new Elephant();
					break;
				case "3":
					animalToAdd = new Eagle();
					break;
				case "4":
					animalToAdd = new Penguin();
					break;
			}

			if (animalToAdd == null) {
				Console.WriteLine("Invalid animal selection");
			} else {
				Console.WriteLine("Enter a name:");
				string name = Console.ReadLine();

				Console.WriteLine("Enter a age:");
				int age = int.Parse(Console.ReadLine());

				
				Mammal mammal = animalToAdd as Mammal;
				if (mammal != null) {
					Console.WriteLine("Is it domestic (yes / no):");
					string yesOrNo = Console.ReadLine();
					mammal.IsDommestic = yesOrNo == "yes";
				}
				
				/*
				if (animalToAdd is Mammal) {
					Console.WriteLine("Is it domestic:");
					string yesOrNo = Console.ReadLine();
					((Mammal)animalToAdd).IsDommestic = yesOrNo == "yes";
				}
				*/

				animalToAdd.Name = name;
				animalToAdd.Age = age;

				animals.Add(animalToAdd);
			}
		}
	}
}
