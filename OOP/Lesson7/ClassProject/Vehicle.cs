using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.ClassProject {
	internal class Vehicle {
		public virtual void StartEngine() {
			Console.WriteLine("Vehicle engine is started!!!");
		}

		public void StopEngine() {
			Console.WriteLine("Vehicle engine is stopped!!");
		}
	}
}
