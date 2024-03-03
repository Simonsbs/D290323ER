using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZooApp {
	internal class Animal {
		public string Name { get; set; }
		public int Age { get; set; }

		public virtual void MakeSound() {
			Console.WriteLine("Im a generic animal sound");
		}

		public virtual void DisplayInformation() {
			Console.WriteLine($"Name: {Name} | Age: {Age}");
		}
	}
}
