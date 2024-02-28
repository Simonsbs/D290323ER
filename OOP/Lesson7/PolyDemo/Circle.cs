using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.PolyDemo {
	internal class Circle : Shape {
		public int Radius { get; set; }

		public override void Draw() {
			Console.WriteLine("Im a circle");
		}
	}
}
