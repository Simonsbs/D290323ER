using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson5 {
	internal class Truck : Vehicle {
		public Truck(string make, string model, int year) : 
			base(make, model, year) {
		}

		public int MaxPayload { get; set; }
	}
}
