using Lesson6.Polymorphism;

namespace Lesson6 {
	internal class Program {
		static void Main(string[] args) {
			Smartphone smartphone = new Smartphone() {
				ID = "1234",
				Name = "A smartphone",
				Price = 50.5M,
				Description = "A new smartphone",
				WarrantyPeriod = 12,
				Weight = 50,
				ScreenSize = 8,
				BatteryLife = 80
			};

			TShirt tshirt = new TShirt();
			tshirt.ID = "ABCD";
			tshirt.Name = "A t-shirt";
			tshirt.Price = 20.2M;
			tshirt.Description = "A new t-shirt";
			tshirt.Weight = 10;
			tshirt.Color = "Blue";
			tshirt.Material = "Cotton";
			tshirt.Size = "XL";

			Groceries groceries = new Groceries() {
				ID = "!@#$%",
				Name = "A grocery",
				Price = 10.1M,
				Description = "A new potatoe",
				Weight = 1,
				ExpiryDate = new DateTime(2025, 10, 2)
			};

			/*
			Console.WriteLine("Smartphone details:");
			smartphone.PrintProductDetails();
			Console.WriteLine($"Shipping: {smartphone.CalculateShippingCost()}");

			Console.WriteLine("-----------------------------------");

			Console.WriteLine("tshirt details:");
			tshirt.PrintProductDetails();
			Console.WriteLine($"Shipping: {tshirt.CalculateShippingCost()}");

			Console.WriteLine("-----------------------------------");

			Console.WriteLine("grocery details:");
			groceries.PrintProductDetails();
			Console.WriteLine($"Shipping: {groceries.CalculateShippingCost()}");*/


			//Animal animal = new Animal();
			//animal.Speak();

			Dog dog = new Dog() {
				Name = "Fido",
				Breed = "German Sheperd"
			};
			dog.Speak();
			dog.Speak2();
			Console.WriteLine($"Breed: {dog.Breed}");

			object dogAsObject = dog;

			Animal dogAsAnimal = dog;
			dogAsAnimal.Speak();
			dogAsAnimal.Speak2();
			//Console.WriteLine($"Breed: {dogAsAnimal.Breed}");

			Console.WriteLine("--------------------");

			Cat cat = new Cat() {
				Color = "Black"
			};
			cat.Speak();
			cat.Speak2();
			Console.WriteLine($"Color: {cat.Color}");

			object catAsObject = cat;

			Animal catAsAnimal = cat;
			catAsAnimal.Speak();
			catAsAnimal.Speak2();

			Console.WriteLine("--------------------");

			Parrot parrot = new Parrot();
			parrot.Speak();

			Bird bird = parrot;
			bird.Speak();

			Animal parrotAsAnimal = parrot;
			parrotAsAnimal.Speak();


			/*
			 * Build a Vehicle class that has a virtual StartEngine method
			 * Build a "Car" class the inherits "Vehicle" and overrides the "StartEngine"
			 * Build a "Truck" class the inherits "Vehicle" and overrides the "StartEngine"
			 * Build a "Watercraft" class that inherits from Vehicle and abstracts and overrides the "StartEngine"
			 * Build a Speedboat class that inherits from Watercraft and overrides the "StartEngine"
			 *
			 * 
			 * In the Main
			 * Create an instance of each class (that you can)
			 * then call the "startEngine" for each object
			 * now call each object as a lower level type (Vehicle/Watercraft) and call the "StartEngine"
			 *
			 * add a method called "StopEngine" to Vehicle (not virtual)
			 * hide the method in the Car, Truck, Watercraft and speedboat classes and call the method when looking at the object as its type and its lower type (Vehicle/Watercraft)
			 */
		}
	}
}
