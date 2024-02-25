using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6.Polymorphism {
	internal abstract class Bird : Animal {
		public abstract override void Speak();
	}

	internal class Parrot : Bird {
		public override void Speak() {
			Console.WriteLine("Parrot: Polly wants a cracker!");
		}
	}

	internal class Pigeon : Bird {
		public override void Speak() {
			Console.WriteLine("Pigeon: pick pick!");
		}
	}
}
