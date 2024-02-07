using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class House {
		public static int count = 2;

		public string address;
		public int bedrooms;
		public bool hasGarage;

		static House() {
			count = 10;

			Console.WriteLine("static ctor");
		}

		public House(string address, int bedrooms, bool hasGarage) {
			this.address = address;
			this.bedrooms = bedrooms;
			this.hasGarage = hasGarage;

			count++;

			Console.WriteLine("main ctor");
		}

		public House(string address) :
			this(address, 0, false) {

			count++;

			Console.WriteLine("only address");
		}

		public House(int bedrooms) :
			this("unknown", bedrooms, true) {

			count++;

			Console.WriteLine("only bedrooms");
		}

		public House(bool hasGarage) :
			this("no address", 0, hasGarage) {

			count++;

			Console.WriteLine("only garage");
		}

		public static void IncrementCount() {
			count++;

			Console.WriteLine("The count is: " + count);
		}

		public void Print() {
			Console.WriteLine("-----------------------------");
			Console.WriteLine("Address: " + address);
			Console.WriteLine("Bedrooms: " + bedrooms);
			Console.WriteLine("Has Garage: " + hasGarage);
			Console.WriteLine("The count is: " + count);
		}
	}
}
