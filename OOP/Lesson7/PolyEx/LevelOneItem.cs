using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson7.PolyEx {
	internal class LevelOneItem : BaseItem {
		public override void ExecuteCommonAction() {
			Console.WriteLine("This is level 1");
		}
	}
}
