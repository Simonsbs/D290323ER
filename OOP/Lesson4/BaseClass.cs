using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal class BaseClass {
		public string BaseProperty {
			get; set;
		}

		public void BaseMethod() {
			Console.WriteLine($"Hello from the base: {BaseProperty}");
		}
	}
}
