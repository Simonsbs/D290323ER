using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal class DerivedClass : BaseClass {
		public string DerivedProperty {
			get; set;
		}

		public void DerivedMethod() {
			Console.WriteLine($"Hello from the derived: {DerivedProperty}");
		}
	}
}
