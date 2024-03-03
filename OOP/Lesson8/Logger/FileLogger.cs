namespace Lesson8.Logger;

class FileLogger : ILogger {
	public void Log(string message) {
		File.AppendAllText("log.txt", message);
	}
}