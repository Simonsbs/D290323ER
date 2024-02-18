using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson4 {
	internal class Product {
		private string name;
		private decimal price;
		private string productCode;

		public Product() {
			//Random rnd = new Random();
			//productCode = rnd.Next(111111, 999999).ToString();

			productCode = Guid.NewGuid().ToString();
			
			//Created = DateTime.Now;
		}

		public DateTime Created {
			get;
			private set;
		}

		public string Name {
			get {
				return name;
			}
			set {
				name = value;
			}
		}

		public decimal Price {
			get {
				return price;
			}
			set {
				price = value;
			}
		}

		public string ProductCode {
			get {
				return productCode;
			}
		}
	}
}
