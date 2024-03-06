using System.ComponentModel.Design;

namespace LibrarySystem {
	internal class Program {
		static List<LibraryItem> libraryItems = new List<LibraryItem> {
			new Book {
				ID = 1,
				Title = "The Hobbit",
				YearPublished = 1937,
				Author = "J.R.R. Tolkien",
				Genre = "Fantasy"
			},
			new Magazine {
				ID = 2,
				Title = "National Geographic",
				YearPublished = 1888,
				IssueNumber = 1,
				Category = "Science"
			},
			new DVD {
				ID = 3,
				Title = "The Shawshank Redemption",
				YearPublished = 1994,
				Director = "Frank Darabont",
				Duration = 142
			}
		};

		static void Main(string[] args) {
			bool isRunning = true;
			while (isRunning) {
				Console.WriteLine("1. Display all library items");
				Console.WriteLine("2. Check out a library item");
				Console.WriteLine("3. Check in a library item");
				Console.WriteLine("4. Add Item");
				Console.WriteLine("E. Exit");
				Console.Write("Enter your choice: ");
				string choice = Console.ReadLine();

				switch (choice) {
					case "1":
						DisplayAll();
						break;
					case "2":
						Checkout();
						break;
					case "3":
						Checkin();
						break;
					case "4":

						break;
					case "E":
						isRunning = false;
						break;
				}
			}
		}

		private static void DisplayAll() {
			foreach (LibraryItem item in libraryItems) {
				item.DisplayInformation();
			}
		}

		private static void Checkin() {
			Console.Write("Enter the ID of the item you want to check in: ");
			int id = int.Parse(Console.ReadLine());
			
			//LibraryItem itemToCheckIn = libraryItems.FirstOrDefault(item => item.ID == id);
			
			LibraryItem itemToCheckIn = null;
			foreach (LibraryItem item in libraryItems) {
				if (item.ID == id) {
					itemToCheckIn = item;
					break;
				}
			}
			
			if (itemToCheckIn != null) {
				ICheckable checkable = itemToCheckIn as ICheckable;
				if (checkable != null) {
					checkable.CheckIn();
				} else {
					Console.WriteLine("This item cannot be checked in");
				}
			} else {
				Console.WriteLine("Item not found");
			}
		}

		private static void Checkout() {
			Console.Write("Enter the ID of the item you want to check out: ");
			int id = int.Parse(Console.ReadLine());
			
			//LibraryItem itemToCheckIn = libraryItems.FirstOrDefault(item => item.ID == id);
			
			LibraryItem toCheckOut = null;
			foreach (LibraryItem item in libraryItems) {
				if (item.ID == id) {
					toCheckOut = item;
					break;
				}
			}
			
			if (toCheckOut != null) {
				ICheckable checkable = toCheckOut as ICheckable;
				if (checkable != null) {
					checkable.CheckOut();
				} else {
					Console.WriteLine("This item cannot be checked out");
				}
			} else {
				Console.WriteLine("Item not found");
			}
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