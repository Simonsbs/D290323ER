using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Lesson3 {
	internal class Program {
		static void Main(string[] args) {
			/*Console.WriteLine($"50F = {ConvertionTools.ConvertFahrenheitToCelcius(50.0)}C");
			Console.WriteLine($"10F = {ConvertionTools.ConvertCelciusToFahrenheit(10.0)}C");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 Mile = {ConvertionTools.ConvertMilesToKilometers(1.0)}");
			Console.WriteLine($"1 Kilometer = {ConvertionTools.ConvertKilometersToMiles(1.0)}");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 pound = {ConvertionTools.ConvertPoundsToKilograms(1.0)}");
			Console.WriteLine($"1 kilo = {ConvertionTools.ConvertKilogramsToPounds(1.0)}");
			*/
			
			Example1 e1 = new Example1();
			//e1.myID = 123;
			
			// Cant do this since the data field is readonly
			//e1.data = new Data();
			e1.data.value = 789;
			
			Console.WriteLine(e1.myID);


			/*
			int a = 123;
			Console.WriteLine(a);
			int b = a;
			a = 456;
			Console.WriteLine(b);

			*/
			/*
			Data d1 = new Data();
			d1.value = 123;
			Console.WriteLine(d1.value);

			Data d2 = d1;
			d1.value = 456;
			Console.WriteLine(d2.value);*/
		}
	}
}
