using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.PolyDemo {
	internal class Square : Shape {
		public override void Draw() {
			Console.WriteLine("*---------*");
			Console.WriteLine("|         |");
			Console.WriteLine("|         |");
			Console.WriteLine("|         |");
			Console.WriteLine("|         |");
			Console.WriteLine("*---------*");
		}
	}
}
