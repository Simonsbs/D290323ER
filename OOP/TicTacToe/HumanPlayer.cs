namespace TicTacToe {
	internal class HumanPlayer : Player {
		public HumanPlayer(string name, char symbol) : 
			base(name, symbol) {
		}

		public override void MakeMove() {
			throw new NotImplementedException();
		}
	}
}
