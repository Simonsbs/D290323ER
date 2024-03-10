namespace TicTacToe {
	internal class Program {
		static void Main(string[] args) {
			GameBoard gameBoard = new GameBoard();

			gameBoard.MakeMove(0, 0, 'X');
			gameBoard.MakeMove(1, 1, 'O');
			gameBoard.MakeMove(2, 2, 'Z');

			
			gameBoard.DisplayBoard();

			Console.WriteLine("is valid move: " + gameBoard.IsValidMove(1, 1));
			Console.WriteLine("is valid move: " + gameBoard.IsValidMove(1, 2));

		}

		/*
		 * Step 1:
		 * 1. Build a class called GameBoard
		 * 2. add a field 2d array of char - that will represent the virtual game board
		 * 3. build a method called "ResetBoard" that sets all the values of the board to ' '
		 * 4. build a method called "DisplayBoard" that prints out the current state of the game board. ** BONUS - add some colors
		 * 5. build a method called "MakeMove" that updates the gameboard with the players move
		 * 6. build a method called "IsValidMove" that checks if the given move is valid, meaning in range and not taken place already
		 * 7. build a method called "CheckWin" that checks if a given 'X' or 'O' has won.
		 * 8. build a method called "IsBoardFull" that checks if the gameboard is full up.
		 */

		/*
		 * Build and complete the game
		 * - Allow user to select number of players per game - 0, 1 or 2
		 * - Input validations
		 * - if 2 human players - get players names
		 * - build the player and computer objects as classes with a shared base class
		 * - loop - at the end of each match ask the user if he wants to play again
		 */
	}
}
