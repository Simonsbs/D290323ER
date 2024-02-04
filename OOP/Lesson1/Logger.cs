using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson1 {
	internal class Logger {
		public void Log(string message) {
			Console.WriteLine(message);
		}
	}

}

namespace Other.SubName.AnotherName.YetAgain {
	internal class Logger {
		public void Log(string message) {
			 File.AppendAllText("log.txt", message);
		}
	}
}
