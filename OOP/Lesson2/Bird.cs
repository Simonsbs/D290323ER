using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class Bird(string name, string color) {
		public string name = name;
		public string color = color;

		/*
		Before C# 6.0
	
		public Bird(string name, string color) {
			this.name = name;
			this.color = color;
		}
		*/

		public void Fly() {
			Console.WriteLine(name + " is flying");
		}
	}
}
