using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal static class ConvertionTools {
		public static double ConvertFahrenheitToCelcius(double fahrenheit) {
			return (fahrenheit - 32.0) * 5.0 / 9.0;
		}

		public static double ConvertCelciusToFahrenheit(double celcius) {
			return (celcius * 9.0 / 5.0) + 32.0;
		}

		public static double ConvertMilesToKilometers(double miles) {
			return miles * 1.609344;
		}

		public static double ConvertKilometersToMiles(double kilometers) {
			return kilometers / 1.609344;
		}

		public static double ConvertPoundsToKilograms(double pounds) {
			return pounds * 0.45359237;
		}

		public static double ConvertKilogramsToPounds(double pounds) {
			return pounds / 0.45359237;
		}
	}
}
