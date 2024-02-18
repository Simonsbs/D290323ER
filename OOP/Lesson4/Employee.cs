using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal class Employee(string fName, string lastName, decimal salary) {
		private string firstName = fName;
		
		public string FirstName {
			get {
				return firstName;
			}
			set {
				firstName = value;
			}
		}

		public string LastName {
			get;
			set;
		} = lastName;

		public decimal Salary {
			private get;
			set;
		} = salary;

		public string FullName {
			get {
				return $"{FirstName} {LastName}";
			}
		}

		public decimal AnnualSalary => Salary * 12;
	}
}
