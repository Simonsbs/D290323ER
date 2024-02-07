using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class House {
		public string address;
		public int bedrooms;
		public bool hasGarage;

		public House(string address, int bedrooms, bool hasGarage) {
			this.address = address;
			this.bedrooms = bedrooms;
			this.hasGarage = hasGarage;
			Console.WriteLine("main ctor");
		}

		public House(string address) : 
			this(address, 0, false) {
			Console.WriteLine("only address");
		}

		public House(int bedrooms) : 
			this("unknown", bedrooms, true) {
			Console.WriteLine("only bedrooms");
		}

		public House(bool hasGarage) : 
			this("no address", 0, hasGarage) {
			Console.WriteLine("only garage");
		}

		public void Print() {
			Console.WriteLine("-----------------------------");
			Console.WriteLine("Address: " + address);
			Console.WriteLine("Bedrooms: " + bedrooms);
			Console.WriteLine("Has Garage: " + hasGarage);
		}
	}
}
