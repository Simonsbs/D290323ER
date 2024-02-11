namespace Lesson3 {
	internal class Program {
		static void Main(string[] args)
		{
			Console.WriteLine($"50F = {ConvertionTools.ConvertFahrenheitToCelcius(50.0)}C");
			Console.WriteLine($"10F = {ConvertionTools.ConvertCelciusToFahrenheit(10.0)}C");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 Mile = {ConvertionTools.ConvertMilesToKilometers(1.0)}");
			Console.WriteLine($"1 Kilometer = {ConvertionTools.ConvertKilometersToMiles(1.0)}");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 pound = {ConvertionTools.ConvertPoundsToKilograms(1.0)}");
			Console.WriteLine($"1 kilo = {ConvertionTools.ConvertKilogramsToPounds(1.0)}");
		}
	}
}
