using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal static class MathConstants {
		public const double PI = 3.14159;
		public const double E = 2.71828;
		public static readonly DateTime creationDate = DateTime.Now;

		public static double CalculateCircumference(double radius) {

			return 2 * PI * radius;
		}

		public static double CalculateExponential(double baseValue) {
			return Math.Pow(baseValue, E);
		}
	}
}
