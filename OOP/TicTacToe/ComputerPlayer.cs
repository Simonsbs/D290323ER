namespace TicTacToe {
	internal class ComputerPlayer : Player {
		public ComputerPlayer(char symbol) :
			base("Computer", symbol) {
		}

		public override void MakeMove() {
			throw new NotImplementedException();
		}
	}
}
