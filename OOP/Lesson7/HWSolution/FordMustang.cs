using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.HWSolution {
	internal class FordMustang : GasolineCar {
		public FordMustang(string make, string model, int year, string engineType) : 
			base(make, model, year, engineType) {
		}

		public override void DisplayInformation() {
			base.DisplayInformation();
			Console.WriteLine("Model: Ford Mustang");
		}
	}
}
