using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal abstract class Product {
		private int _secret;

		private int Secret {
			get => _secret;
			set => _secret = value;
		}

		public string ID { get; set; }	
		public string Name { get; set; }
		public decimal Price { get; set; }
		public string Description { get; set; }
		public decimal Weight { get; set; }

		public abstract decimal CalculateShippingCost();

		public virtual void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight}");
		}
	}
}
