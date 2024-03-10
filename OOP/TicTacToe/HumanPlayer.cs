namespace TicTacToe {
	internal class HumanPlayer : Player {
		public HumanPlayer(string name, char symbol) :
			base(name, symbol) {
		}

		public override void MakeMove(GameBoard board) {
			do {
				Console.WriteLine($"it's {Name}'s ({Symbol}) turn.");
				Console.WriteLine("Enter your move 'row col' - seperated with a space");
				string input = Console.ReadLine();
				string[] parts = input.Split(' ');

				int row, col;

				if (parts.Length == 2 && // check user entered 2 values
					int.TryParse(parts[0], out row) &&  // check the first value is a number
					int.TryParse(parts[1], out col) &&  // check the second number is a number
					board.IsValidMove(row, col)) { // check that the proposed move is valid

					board.MakeMove(row, col, Symbol);
					return;
				}

				Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("Invalid input, try again");
				Console.ResetColor();
            } while (true);
		}
	}
}
