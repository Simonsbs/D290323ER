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
		}

		public void Start() {
			do {
				InitializeGame();
				GameLoop();
				Console.WriteLine("Do you want to play again?");
				string input = Console.ReadLine().ToLower();
				if (!(input == "y" || input == "yes")) {
					return;
				}
			} while (true);
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
			board.DisplayBoard();
			DisplayEndGame();
		}

		private void DisplayEndGame() {
			if (board.CheckWin(player1.Symbol)) {
				Console.WriteLine($"{player1.Name} is the winner!!!");
			} else if (board.CheckWin(player2.Symbol)) {
				Console.WriteLine($"{player2.Name} is the winner!!!");
			} else {
				Console.WriteLine("Its an draw, better luck next time");
			}
		}

		private string GetPlayerName(int playerNumber) {
			Console.WriteLine($"Enter name for player {playerNumber}");
			return Console.ReadLine();
		}
	}
}
