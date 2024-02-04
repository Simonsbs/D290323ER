using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson1 {
	internal class Employee {
		public string name;
		public string jobTitle;
		public int daysWorking;
		private int age;

		public Employee() {
			name = "unknown";
			jobTitle = "unknown";
			daysWorking = 1;
			age = 10;
		}

		public Employee(string name) {
			this.name = name;
		}

		public Employee(int age) {
			this.age = age;
		}

		public Employee(string name, int age) {
			this.name = name;

			if (age < 0) {
				throw new Exception("Age cannot be less than 0");
			}
			if (age > 120) {
				throw new Exception("Age cannot be greater than 120");
			}
			this.age = age;
		}

		public void CelebrateBirthday() {
			age++;

			string name = "Birthday Boy";

			Console.WriteLine("Happy birthday to " + this.name + " you are now " + age + " years old");
		}

		public void DoWork() {
			Console.WriteLine(name + " is Doing work..., btw my age is: " + age);


		}
	}
}
