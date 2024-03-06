namespace LibrarySystem {
	internal class Program {
		static void Main(string[] args) {

		}
	}

	abstract class LibraryItem {
		public int ID {
			get; set;
		}
		public string Title {
			get; set;
		}
		public int YearPublished {
			get; set;
		}

		// SIMON

		public abstract void DisplayInformation();
	}

	interface ICheckable {
		void CheckOut();
		void CheckIn();

	}

	class Book : LibraryItem, ICheckable {
		public string Author {
			get; set;
		}

		public string Genre {
			get; set;
		}

		public override void DisplayInformation() {
			Console.WriteLine($"ID: {ID} | Title: {Title} | YearPublished: {YearPublished} | Author: {Author} | Genre: {Genre}");
		}

		public void CheckOut() {
			Console.WriteLine($"Book {Title} has been checked out");
		}

		public void CheckIn() {
			Console.WriteLine($"Book {Title} has been checked in");
		}
	}

	class Magazine : LibraryItem {
		public int IssueNumber {
			get; set;
		}
		public string Category {
			get; set;
		}
		public override void DisplayInformation() {
			Console.WriteLine($"ID: {ID} | Title: {Title} | YearPublished: {YearPublished} | IssueNumber: {IssueNumber} | Category: {Category}");
		}
	}

	class DVD : LibraryItem, ICheckable {
		public string Director {
			get; set;
		}
		public int Duration {
			get; set;
		}

		public override void DisplayInformation() {
			Console.WriteLine($"ID: {ID} | Title: {Title} | YearPublished: {YearPublished} | Director: {Director} | Duration: {Duration}");
		}

		public void CheckOut() {
			Console.WriteLine($"DVD {Title} has been checked out");
		}

		public void CheckIn() {
			Console.WriteLine($"DVD {Title} has been checked in");
		}
	}
}
