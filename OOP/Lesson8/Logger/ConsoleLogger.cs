namespace Lesson8.Logger;

class ConsoleLogger : ILogger {
	public void Log(string message) {
		Console.WriteLine(message);
	}
}