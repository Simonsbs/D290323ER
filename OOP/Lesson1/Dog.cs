using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson1 {
	internal class Dog {
		public string name;
		public string breed;
		public int age;

		public void PrintDetails() {
			Console.WriteLine("--------------------------");
			Console.WriteLine("Name: " + name);
			Console.WriteLine("Breed: " + breed);
			Console.WriteLine("Age: " + age);
		}
	}
}
