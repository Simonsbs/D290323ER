using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.ClassProject {
	internal abstract class Watercraft : Vehicle {
		public abstract override void StartEngine();

		public new void StopEngine() {
			Console.WriteLine("Watercraft engine is stopped!!!");
		}
	}
}
