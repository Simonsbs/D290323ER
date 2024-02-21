using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson5 {
	internal class Vehicle {
		public Vehicle(string make, string model, int year) {
			Make = make;
			Model = model;
			Year = year;
		}

		public string Make {
			get;
			set;
		}

		public string Model {
			get;
			set;
		}

		public int Year {
			get;
			set;
		}
	}
}
