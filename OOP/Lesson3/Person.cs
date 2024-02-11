using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal class Person {
		public int id;
		public string name;
		public int age;

		public int thisIsAField;


		public int ID {
			get {
				// Define what to do when someone asks for the property value
				return id;
			}
			set {
				// Define what tot do when someone wants to change the property value
 				id = value;
			}
		}
	}
}
