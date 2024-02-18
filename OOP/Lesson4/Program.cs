namespace Lesson4 {
	internal class Program {
		static void Main(string[] args) {
			Cat c1 = new Cat();

			c1.Name = "Meowser";
			c1.LivesLeft = 5;
			Console.WriteLine($"{c1.Name} has {c1.LivesLeft} lives left");
			c1.LivesLeft = -8;
			Console.WriteLine($"{c1.Name} has {c1.LivesLeft} lives left");
			c1.Color = "Ginger";
			Console.WriteLine($"{c1.Name}'s favorite number is {c1.FavoriteNumber}");

			Cat c2 = new Cat();
			c2.Name = "Simon";
			c2.LivesLeft = 2;
			c2.Color = "Brown";
			Console.WriteLine($"{c2.Name} has {c2.LivesLeft} lives left");
			Console.WriteLine($"{c2.Name}'s favorite number is {c2.FavoriteNumber}");
			Console.WriteLine($"{c2.Name}'s favorite number is {c2.GetFavoriteNumber()}");
			Console.WriteLine($"{c2.Name}'s full name is: {c2.FullName}");


			// Task: Create a 'Product' class inside a new file named 'Product.cs'.
			// The 'Product' class should have the following properties:
			// 1. Name - Read/Write property of type string.
			// 2. Price - Read/Write property of type decimal.
			// 3. ProductCode - Read-only property of type string. This should be auto-generated in the constructor.

		}
	}
}
