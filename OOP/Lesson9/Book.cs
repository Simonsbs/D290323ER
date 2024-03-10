using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson9 {
	internal class Book {
		public Book() {
		}
		public Book(string line) {
			string[] parts = line.Split(',');
			ID = int.Parse(parts[0]);
			Name = parts[1];
			Writer = parts[2];
		}

		public int ID { get; set; }
		public string Name { get; set; }
		public string Writer { get; set; }

		public static Book FromCSV(string line) {
			string[] parts = line.Split(',');
			return new Book {
				ID = int.Parse(parts[0]),
				Name = parts[1],
				Writer = parts[2]
			};
		}

		public override string ToString() {
			return $"{ID},{Name},{Writer}" + Environment.NewLine;
		}
	}
}
