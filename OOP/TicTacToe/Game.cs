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
		private Player currentPlayer;

		public Game() {
			board = new GameBoard();
			InitializeGame();
		}

		public void Start() {
			bool again = true;	
			while (again) {
				GameLoop();
                Console.WriteLine("Do you want to play again?");
				string input = Console.ReadLine().ToLower();
				again = (input == "y" || input == "yes");
				if (again) {
					InitializeGame();
				}
            }
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
					player1 = new HumanPlayer(GetPlayerName(1), 'X');
					player2 = new HumanPlayer(GetPlayerName(2), 'O');
					break;
			}

			currentPlayer = player1;
		}

		private void GameLoop() {
			bool gameOver = false;
			while (!gameOver) {
				board.DisplayBoard();
				currentPlayer.MakeMove(board);
				gameOver = board.CheckWin(currentPlayer.Symbol) || board.IsBoardFull();
				if (!gameOver) {
					currentPlayer = currentPlayer == player1 ? player2 : player1;
				}
			}
			// TODO: display game over
		}

		private string GetPlayerName(int playerNumber) {
			Console.WriteLine($"Enter name for player {playerNumber}");
			return Console.ReadLine();
		}
	}
}
