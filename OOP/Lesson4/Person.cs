using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal partial class Person {
		private string fName;

		public string FirstName {
			get => fName;
			set => fName = value;
		}

		public string LastName {
			get;
			set;
		}

		public string FullName => fName + " " + LastName;
	}
}
