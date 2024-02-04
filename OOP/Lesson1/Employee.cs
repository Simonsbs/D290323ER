using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson1 {
	internal class Employee {
		public string name;
		private int age;

		public Employee() {
			name = "unknown";
			age = 50;
		}

		public void CelebrateBirthday() {
			age++;
			Console.WriteLine("Happy birthday to " + name + " you are now " + age + " years old");
		}

		public void DoWork() {
			Console.WriteLine(name + " is Doing work..., btw my age is: " + age);


		}
	}
}
