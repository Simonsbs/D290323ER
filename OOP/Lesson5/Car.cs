using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson5 {
	internal class Car(string make, string model, int year) : 
		Vehicle(make, model, year) {

		public int DoorCount {
			get; set;
		}
	}	
}
