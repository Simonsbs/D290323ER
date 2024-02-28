using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.ClassProject {
	internal class Car : Vehicle {
		public override void StartEngine() {
			Console.WriteLine("Car engine is started!!!");
		}

		public new void StopEngine() {
			Console.WriteLine("Car engine is stopped!!!");
		}
	}
}
