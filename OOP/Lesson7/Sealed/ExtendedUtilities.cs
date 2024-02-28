using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.Sealed {
	internal class ExtendedUtilities {
		private Utilities baseUtilities = new Utilities();

		public int Add(int num1, int num2) {
			return baseUtilities.Add(num1, num2);
		}
	}
}
