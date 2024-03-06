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
						AddItem();
						break;
					case "E":
						isRunning = false;
						break;
				}
			}
		}

		private static void AddItem() {
			Console.WriteLine("What type of item do you want to add:");
			Console.WriteLine("1. Book");
			Console.WriteLine("2. Magazine");
			Console.WriteLine("3. DVD");
			Console.Write("Enter your choice: ");
			string choice = Console.ReadLine();

			Console.WriteLine("enter the item id:");
			int id = int.Parse(Console.ReadLine());
			Console.WriteLine("enter the item title:");
			string title = Console.ReadLine();
			Console.WriteLine("enter the item year published:");
			int yearPublished = int.Parse(Console.ReadLine());

			switch (choice) {
				case "1":
					Book book = new Book {
						ID = id,
						Title = title,
						YearPublished = yearPublished
					};
					Console.WriteLine("enter the item author:");
					book.Author = Console.ReadLine();
					Console.WriteLine("enter the item genre:");
					book.Genre = Console.ReadLine();
					libraryItems.Add(book);
					break;
				case "2":
					Magazine magazine = new Magazine {
						ID = id,
						Title = title,
						YearPublished = yearPublished
					};
					Console.WriteLine("enter the item issue number:");
					magazine.IssueNumber = int.Parse(Console.ReadLine());
					Console.WriteLine("enter the item category:");
					magazine.Category = Console.ReadLine();
					libraryItems.Add(magazine);
					break;
				case "3":
					DVD dvd = new DVD {
						ID = id,
						Title = title,
						YearPublished = yearPublished
					};
					Console.WriteLine("enter the item director:");
					dvd.Director = Console.ReadLine();
					Console.WriteLine("enter the item duration:");
					dvd.Duration = int.Parse(Console.ReadLine());
					libraryItems.Add(dvd);
					break;
			}

			Console.WriteLine("New item added");
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