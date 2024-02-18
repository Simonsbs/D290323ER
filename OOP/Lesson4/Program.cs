using System.Net.Http.Headers;

namespace Lesson4 {
	internal class Program {
		static void Main(string[] args) {
			/*
			Cat c1 = new Cat();

			c1.Name = "Meowser";
			c1.LivesLeft = 5;
			Console.WriteLine($"{c1.Name} has {c1.LivesLeft} lives left");
			c1.LivesLeft = -8;
			Console.WriteLine($"{c1.Name} has {c1.LivesLeft} lives left");
			c1.Color = "Ginger";
			Console.WriteLine($"{c1.Name}'s favorite number is {c1.FavoriteNumber}");

			Cat c2 = new Cat();
			c2.Name = "Simon";
			c2.LivesLeft = 2;
			c2.Color = "Brown";
			Console.WriteLine($"{c2.Name} has {c2.LivesLeft} lives left");
			Console.WriteLine($"{c2.Name}'s favorite number is {c2.FavoriteNumber}");
			Console.WriteLine($"{c2.Name}'s favorite number is {c2.GetFavoriteNumber()}");
			Console.WriteLine($"{c2.Name}'s full name is: {c2.FullName}");
			*/

			// Task: Create a 'Product' class inside a new file named 'Product.cs'.
			// The 'Product' class should have the following properties:
			// 1. Name - Read/Write property of type string.
			// 2. Price - Read/Write property of type decimal.
			// 3. ProductCode - Read-only property of type string. This should be auto-generated in the constructor.

			/*
			Product p1 = new Product();
			Console.WriteLine($"Product Code is {p1.ProductCode}");
			
			// wont work, Property is readonly
			//p1.ProductCode = "NEW CODE!!!";

			p1.Name = "Pencil";
			
			// wont work, Property is readonly
			//p1.Created = DateTime.Now;
			
			Console.WriteLine($"Created: {p1.Created}");


			Person person = new Person();
			person.FirstName = "Simon";
			person.LastName = "Stirling";
			Console.WriteLine($"{person.FirstName}");
			Console.WriteLine($"{person.FullName}");
			*/

			// Task: Create a 'Employee' class inside a new file named 'Employee.cs'.
			// The 'Employee' class should have the following properties:
			// 1. FirstName - Public read/write property of type string.
			// 2. LastName - Public read/write property of type string.
			// 3. Salary - Private read/write property of type decimal.
			// 4. FullName - Public read-only calculated property that returns "FirstName LastName".
			// 5. AnnualSalary - Public read-only calculated property that returns Salary * 12.
			// 6. create and test the properties

			/*
			Employee e1 = new Employee("Simon", "Stirling", 123.456M);
			Console.WriteLine($"First name: {e1.FirstName}");
			Console.WriteLine($"Last name: {e1.LastName}");
			//Console.WriteLine($"Salary: {e1.Salary}");
			Console.WriteLine($"Fullname: {e1.FullName}");
			Console.WriteLine($"Annual Salary: {e1.AnnualSalary:N}");
			*/
			/*
			Person p1 = new Person();
			p1.FirstName = "Simon";
			p1.LastName = "Stirling";
			p1.Print();
			*/

			// Task: Create a partial 'Employee' class spread across two files:
			// 1. In 'Employee.cs', define the public and private properties.
			// 2. In 'Employee.Calculations.cs', define the calculated properties and methods.

			/*
			BaseClass bc = new BaseClass();
			bc.BaseProperty = "Base Value";
			bc.BaseMethod();
			*/


			DerivedClass dc = new DerivedClass();
			dc.DerivedProperty = "Derived Value";
			dc.DerivedMethod();
			dc.BaseProperty = "Derived Value2";
			dc.BaseMethod();

			


			// Task: Create a Base class called TopClass
			// Create a class called BottomClass
			// Add a property to TopClass
			// Add a method to BottomClass
			// make it so that BottomClass inherits from TopClass


			// H.W.: Implement a basic inheritance hierarchy involving a single base class and at least two derived classes.
			// Base class: Vehicle with common properties.
			// Derived classes: Car and Truck, each with additional unique properties.
		}
	}
}
