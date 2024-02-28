using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class TeslaModelS : ElectricCar {
		public TeslaModelS(string make, string model, int year, int batteryCapacity) : 
			base(make, model, year, batteryCapacity) {
		}

		public override void DisplayInformation() {
			base.DisplayInformation();
			Console.WriteLine("Model: Tesla Model S");
		}
	}
}
