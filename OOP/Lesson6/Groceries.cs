using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal class Groceries : Product {
		public DateTime ExpiryDate { get; set; }
		public override decimal CalculateShippingCost() {
			return 2;
		}

		public override void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight} | ExpiryDate: {ExpiryDate}");
		}
	}
}
