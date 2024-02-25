using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal class TShirt : Clothing {
		public string Color { get; set; }

		public override void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight} | Size: {Size} | Material: {Material} | Color: {Color}");
		}
	}
}
