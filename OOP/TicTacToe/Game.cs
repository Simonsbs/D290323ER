using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicTacToe {
	internal class Game {
		private Player player1;
		private Player player2;
		private GameBoard board;

		public Game() {
			board = new GameBoard();
			InitializeGame();
		}

		private void InitializeGame() {
			Console.Clear();
			board.Reset();
            Console.WriteLine("Welcome to my Tic-Tac-Toe game");
            Console.WriteLine("---------------------------------");
            int playerCount = InputHelpers.GetValidInteger("How many human players are playing? (0, 1, 2):", 0, 2);

			switch (playerCount) {
				case 0:
					player1 = new ComputerPlayer('X');
					player2 = new ComputerPlayer('O');
					break;
				case 1:
					player1 = new HumanPlayer("Human", 'X');
					player2 = new ComputerPlayer('O');
					break;
				case 2:
					player1 = new HumanPlayer("Human1", 'X');
					player2 = new HumanPlayer("Human2", 'O');
					break;
			}
        }
	}
}
