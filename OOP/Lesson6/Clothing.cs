using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal class Clothing : Product {
		public string Size { get; set; }
		public string Material { get; set; }
		
		public override decimal CalculateShippingCost() {
			return 20;
		}

		public override void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight} | Size: {Size} | Material: {Material}");
		}
	}
}
