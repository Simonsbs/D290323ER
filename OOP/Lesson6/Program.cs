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

			TShirt tshirt = new TShirt() ;
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
			Console.WriteLine($"Shipping: {groceries.CalculateShippingCost()}");
		}
	}
}
