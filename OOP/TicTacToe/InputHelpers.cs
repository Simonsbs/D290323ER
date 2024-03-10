namespace TicTacToe {
	internal static class InputHelpers {
		public static int GetValidInteger(string prompt, int min, int max) {
			int result;
			do {
                Console.WriteLine(prompt);
				string stringInput = Console.ReadLine();
				if (int.TryParse(stringInput, out result) && result >= min && result <= max) {
					return result;
				}

				Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine($"Invalid input, please enter a number between {min} and {max}");
				Console.ResetColor();
            } while (true);
		}
	}
}
