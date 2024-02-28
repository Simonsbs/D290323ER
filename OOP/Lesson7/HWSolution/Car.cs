using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class Car : Vehicle {
		public Car(string make, string model, int year) : 
			base(make, model, year) {
		}

		public override void DisplayInformation() {
			base.DisplayInformation();
			Console.WriteLine("Im a Car");
		}
	}
}
