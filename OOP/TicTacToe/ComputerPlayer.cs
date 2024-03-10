namespace TicTacToe {
	internal class ComputerPlayer : Player {
		public ComputerPlayer(char symbol) :
			base("Computer", symbol) {
		}

		public override void MakeMove(GameBoard board) {
			Console.WriteLine($"{Name} is thinking...");
			Thread.Sleep(1000);

			Random rnd = new Random();
			int row, col;
			do {
				row = rnd.Next(0, 3);
				col = rnd.Next(0, 3);
			} while (!board.IsValidMove(row, col));

			board.MakeMove(row, col, Symbol);
			Console.WriteLine($"{Name} makes move of {Symbol} to row:{row} col:{col}");
		}
	}
}
