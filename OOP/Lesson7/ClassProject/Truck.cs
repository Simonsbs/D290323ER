using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.ClassProject {
	internal class Truck : Vehicle {
		public override void StartEngine() {
			Console.WriteLine("Truck engine is started!!!");
		}

		public new void StopEngine() {
			Console.WriteLine("Truck engine is stopped!!!");
		}
	}
}
