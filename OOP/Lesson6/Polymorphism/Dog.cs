using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6.Polymorphism {
	internal class Dog : Animal {
		public string Breed { get; set; }

		public override void Speak() {
			Console.WriteLine("Dog says 1: Woof Woof");
		}

		public new void Speak2() {
			Console.WriteLine("Dog says 2: Woof Woof");
		}
	}
}
