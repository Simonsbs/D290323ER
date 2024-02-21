using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson5 {
	internal abstract class Shape {
		public void Draw() {
			Console.WriteLine("I'm a shape");
		}

		public abstract void Draw2();

		public virtual void Draw3() {
			Console.WriteLine("I'm a shape");
		}
	}


	internal class Circle : Shape {
		public void Draw() {
			Console.WriteLine("Draw1 - I'm a circle");
		}

		public override void Draw2() {
			Console.WriteLine("Draw2 - I'm a circle");
		}

		public int CalculateCircumfrence() {
			return 0;
		}

		public override void Draw3() {
			base.Draw3();
			Console.WriteLine("Draw3 - I'm a circle");
		}
	}

	internal class Rectangle : Shape {
		public new void Draw() {
			Console.WriteLine("Draw1 - I'm a rectangle");
		}

		public override void Draw2() {
			Console.WriteLine("Draw2 - I'm a rectangle");
		}

		public override void Draw3() {
			Console.WriteLine("Draw3 - I'm a rectangle");
		}
	}

	internal abstract class Triangle : Shape {
		public abstract void CalculateHeight();
	}

	internal class RightAngleTriangle : Triangle {
		public override void Draw2() {
			Console.WriteLine("Draw2 - I'm a right angle triangle");
		}

		public override void CalculateHeight() {

		}
	}
}
