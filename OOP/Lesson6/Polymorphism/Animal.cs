using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6.Polymorphism {
	internal class Animal {
		public string Name { get; set; }

		public virtual void Speak() {
			Console.WriteLine("Animal 1: Im a generic animal");
		}

		public void Speak2() {
			Console.WriteLine("Animal 2: Im a generic animal");
		}


	}

}
