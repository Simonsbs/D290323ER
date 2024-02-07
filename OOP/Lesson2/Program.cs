using System.Reflection.Metadata;

namespace Lesson2 {
	internal class Program {
		static void Main(string[] args) {
			Employee e1 = new Employee(5000);
			e1.CelebrateBirthday();

			Employee e2 = new Employee("John", 30);
			


			// Build a class called User
			// add 3 fields (of different types)
			// build 4 constructors, one for each field (alone) and one for all fields together
			// make sure to chain the single constructors to the all fields constructor
			// build a method that prints out the user's details
		}
	}
}
