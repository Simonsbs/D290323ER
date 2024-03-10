using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicTacToe {
	internal abstract class Player {
		public char Symbol { get; set; }
		public string Name { get; set; }

		public Player(string name, char symbol) {
			Symbol = symbol;
			Name = name;
		}

		public abstract void MakeMove();
	}
}
