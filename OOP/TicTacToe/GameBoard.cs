using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicTacToe {
	internal class GameBoard {
		private char[,] board = new char[3, 3];

		public GameBoard() {
			Reset();
		}

		public void Reset() {
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					board[i, j] = ' ';
				}
			}
		}

		public void DisplayBoard() {
			Console.Clear();
			Console.WriteLine("     0   1   2");
			Console.WriteLine("   +---+---+---+");
			for (int i = 0; i < 3; i++) {
				Console.Write($" {i} |");
				for (int j = 0; j < 3; j++) {
					char value = board[i, j];

					Console.ForegroundColor = value == 'X' ? ConsoleColor.Red : value == 'O' ? ConsoleColor.Blue : ConsoleColor.White;
					Console.Write($" {value} ");
					Console.ResetColor();
					Console.Write("|");
				}

				Console.WriteLine();
				Console.WriteLine("   +---+---+---+");
			}
		}

		public void MakeMove(int row, int col, char symbol) {
			if (symbol != 'X' && symbol != 'O') {
				return;
			}
			board[row, col] = symbol;
		}

		public bool IsValidMove(int row, int col) {
			return row >= 0 && row < 3 && col >= 0 && col < 3 && board[row, col] == ' ';
		}

		public bool CheckWin(char symbol) {
			for (int i = 0; i < 3; i++) {
				bool row = (board[i, 0] == symbol && board[i, 1] == symbol && board[i, 2] == symbol);
				bool col = (board[0, i] == symbol && board[1, i] == symbol && board[2, i] == symbol);
				if (row || col) {
					return true;
				}
			}

			bool d1 = (board[0, 0] == symbol && board[1, 1] == symbol && board[2, 2] == symbol);
			bool d2 = (board[0, 2] == symbol && board[1, 1] == symbol && board[2, 0] == symbol);
			if (d1 || d2) {
				return true;
			}

			return false;
		}

		public bool IsBoardFull() {
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					if (board[i,j] == ' ') {
						return false;
					}
				}
			}

			return true;
		}
	}
}
