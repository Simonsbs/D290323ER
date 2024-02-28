using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class ElectricCar : Car {
		public int BatteryCapacity { get; set; }
		
		public ElectricCar(string make, string model, int year, int batteryCapacity) : 
			base(make, model, year) {
			BatteryCapacity = batteryCapacity;
		}

		public override void DisplayInformation() {
			base.DisplayInformation();
			Console.WriteLine($"Battery Capacity: {BatteryCapacity}");
		}
	}
}
