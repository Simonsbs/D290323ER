using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class AreaCalculator {
		double pi;

		public AreaCalculator(double pi) {
			this.pi = pi;
		}

		// calculate a circles area
		public double CalculateArea(double radius) {
			return pi * Math.Pow(radius, 2);
		}

		// calculate a rectangles area
		public double CalculateArea(double length, double width) {
			return length * width;
		}

		// calculate a triangles area
		public double CalculateArea(double side, double height, bool isTriangle) {
			if (!isTriangle) {
				throw new ArgumentException("Not a triangle");
			}
			return 0.5 * side * height;
		}
	}
}
