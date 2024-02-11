using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal class Example1 {
		public readonly int myID;
		public readonly Data data;

		public Example1() {
			myID = 456;
			data = new Data();
		}

		public void DoStuff() {
			// Cant do this since the data field is readonly
			//data = new Data();

			data.value = 789;
		}
	}
}
