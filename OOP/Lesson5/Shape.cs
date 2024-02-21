using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson5 {
	internal abstract class Shape {
		public Shape() {
			Color = "None";
		}

		public string Color {
			get; set;
		}

		public void Draw() {
			Console.WriteLine("I'm a shape");
		}

		public abstract void Draw2();

		public virtual void Draw3() {
			Console.WriteLine("I'm a shape");
		}

		public abstract double CalculateArea();
	}


	internal class Circle : Shape {
		private double _radius;

		public Circle(double radius) {
			_radius = radius;
		}

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

		public double Radius {
			get {
				return _radius;
			}
			set {
				if (value < 0) {
					//throw new Exception("Radius must be positive number");
					Console.WriteLine("Radius must be positive number, setting to default value: 2");
					_radius = 2;
				} else {
					_radius = value;
				}

			}
		}

		public override double CalculateArea() {
			return Math.PI * Math.Pow(Radius, 2);
		}
	}

	internal class Rectangle : Shape {
		public Rectangle(double width, double height) {
			Width = width;
			Height = height;
		}

		public new void Draw() {
			Console.WriteLine("Draw1 - I'm a rectangle");
		}

		public override void Draw2() {
			Console.WriteLine("Draw2 - I'm a rectangle");
		}

		public override void Draw3() {
			Console.WriteLine("Draw3 - I'm a rectangle");
		}

		public double Width {
			get; set;
		}
		public double Height {
			get; set;
		}

		public override double CalculateArea() {
			return Width * Height;
		}
	}

	internal class Square : Rectangle {
		public Square(double side) :
			base(side, side) {
		}

		public Square() : 
			this(10) {

		}
	}

	/*
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
	*/
}
