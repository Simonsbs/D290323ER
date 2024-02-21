namespace Lesson5 {
	internal class Program {
		static void Main(string[] args) {
			/*
			Vehicle v1 = new Vehicle("hundai", "i20", 2005);
			
			Console.WriteLine($"{v1.Make} | {v1.Model} | {v1.Year}");

			Truck t1 = new Truck("mack", "big", 2015);
			
			Console.WriteLine($"{t1.Make} | {t1.Model} | {t1.Year}");

			Car c1 = new Car("volvo", "x2", 1999);
			
			Console.WriteLine($"{c1.Make} | {c1.Model} | {c1.Year}");
			*/

			//Shape s1 = new Shape();
			//s1.Draw();
			
			Circle c1 = new Circle();
			c1.Draw();
			c1.Draw2();
			c1.Draw3();

			Rectangle r1 = new Rectangle();
			r1.Draw();
			r1.Draw2();
			r1.Draw3();
		}
	}
}
