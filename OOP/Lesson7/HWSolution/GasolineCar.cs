using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class GasolineCar : Car {
		public string EngineType { get; set; }
		public GasolineCar(string make, string model, int year, string engineType) : 
			base(make, model, year) {
			EngineType = engineType;
		}

		public override void DisplayInformation() {
			base.DisplayInformation();
			Console.WriteLine($"Engine Type: {EngineType}");
		}
	}
}
