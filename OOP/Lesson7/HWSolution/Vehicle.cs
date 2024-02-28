using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class Vehicle {
		public string Make { get; set; }
		public string Model { get; set; }
		public int Year { get; set; }

		public Vehicle(string make, string model, int year) {
			Make = make;
			Model = model;
			Year = year;
		}

		public virtual void DisplayInformation() {
			Console.WriteLine("---------------------------------------------");
			Console.WriteLine($"Make: {Make} | Model: {Model} | Year: {Year}");
		}
	}
}
