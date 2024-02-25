using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal class Electronics : Product {
		public int WarrantyPeriod { get; set; }

		public override decimal CalculateShippingCost() {
			if (Weight > 100) {
				return 50;
			}
			return Price * 0.05M;
		}

		public override void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight} | WarrantyPeriod: {WarrantyPeriod}");
		}
	}
}
