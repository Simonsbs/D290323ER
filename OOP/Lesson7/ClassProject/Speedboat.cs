using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.ClassProject {
	internal class Speedboat : Watercraft {
		public override void StartEngine() {
			Console.WriteLine("Speedboat engine is started!!!");
		}

		public new void StopEngine() {
			Console.WriteLine("Speedboat engine is stopped!!!");
		}
	}
}
