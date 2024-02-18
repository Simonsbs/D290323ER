using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal class Cat {
		private string name;
		private int age;
		private string color;
		private int livesLeft;

		public void PrintIsAlive() {
			if (livesLeft != 0) {
				Console.WriteLine("Im alive");
			}
		}

		public int GetFavoriteNumber() {
			Random rnd = new Random();
			return rnd.Next(10, 50);
		}

		public int FavoriteNumber {
			get {
				Random rnd = new Random();
				return rnd.Next(10, 50);
			}
			set {
				Console.WriteLine("Sorry, nothing to set");
			}
		}

		public string FullName {
			get {
				return name + $" | {age} | {color}";
			}
			set {
				Console.WriteLine("Sorry, nothing to set");
			}
		}

		public string Name {
			get {
				return name;
			}
			set {
				name = value;
			}
		}

		public int Age {
			get {
				return age;
			}
			set {
				age = value;
			}
		}

		public string Color {
			get {
				return color;
			}
			set {
				color = value;
			}
		}

		public int LivesLeft {
			get {
				if (name == "Simon") {
					return int.MaxValue;
				}
				return livesLeft;
			}
			set {
				if (value < 0) {
					Console.WriteLine("Age must be greater than 0");
					return;
				}
				livesLeft = value;
			}
		}
	}
}
