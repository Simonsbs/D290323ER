using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6 {
	internal class Smartphone : Electronics {
		public decimal ScreenSize { get; set; }
		public int BatteryLife { get; set; }
		
		public override void PrintProductDetails() {
			Console.WriteLine($"ID: {ID} | Name: {Name} | Price: {Price} | Description: {Description} | Weight: {Weight} | ScreenSize: {ScreenSize} | BatteryLife: {BatteryLife}");
		}
	}
}
