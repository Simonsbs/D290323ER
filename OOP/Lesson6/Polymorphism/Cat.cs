using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6.Polymorphism {
	internal class Cat : Animal {
		public string Color { get; set; }

		public override void Speak() {
			Console.WriteLine("Cat: Meow!");
		}

		public void Speak2() {
			Console.WriteLine("Cat 2: Meow!");
		}
	}
}
