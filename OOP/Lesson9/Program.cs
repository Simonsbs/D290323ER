

namespace Lesson9 {
	internal class Program {
		static void Main(string[] args) {
			/*
			object aObj = new List<int>();
			object bObj = new DerivedClass();

			if (aObj is DerivedClass) {
				Console.WriteLine("aObj is a derived class");
				DerivedClass derivedClass = (DerivedClass)aObj;
			}

			DerivedClass dc1 = aObj as DerivedClass;
			Console.WriteLine($"dc1: {dc1}");

			if (bObj is DerivedClass) {
                Console.WriteLine("bObj is a derived class");
				DerivedClass aDerived = (DerivedClass)bObj;
            }
			DerivedClass dc2  = bObj as DerivedClass;
            Console.WriteLine($"dc2: {dc2}");

            if (bObj is BaseClass) {
				Console.WriteLine("bObj is a base class");
				BaseClass baseClass = (BaseClass)bObj;
			}

			DerivedClass dc3 = bObj as BaseClass;
			Console.WriteLine($"dc2: {dc3}");

			if (bObj is IClass) {
				Console.WriteLine("bObj is a IClass interface implementor");
				IClass iClass = (IClass)bObj;
			}

			DerivedClass dc4 = bObj as IClass;
			Console.WriteLine($"dc2: {dc4}");
			*/
			/*
			double a = 1.2;
			int b = (int)a;
			double c = (double)b;
			*/
			/*
			List<Book> books = new List<Book>();
			books.Add(new Book() {
				ID = 1,
				Name = "Book1",
				Writer = "Writer1"
			});
			books.Add(new Book() {
				ID = 2,
				Name = "Book2",
				Writer = "Writer2"
			});
			books.Add(new Book() {
				ID = 3,
				Name = "Book3",
				Writer = "Writer3"
			});

			WriteToFile("mybooks.txt", books);
			*/
			List<Book> fromFile = ReadFromFile("mybooks.txt");

			foreach (Book book in fromFile) {
				Console.WriteLine(book);
			}	
		}

		private static List<Book> ReadFromFile(string path) {
			string content = File.ReadAllText(path);
			string[] lines = content.Split(Environment.NewLine);
			List<Book> books = new List<Book>();
			foreach (string line in lines) {
				//books.Add(new Book(line));
				books.Add(Book.FromCSV(line));
			}
			return books;
		}

		private static void WriteToFile(string path, List<Book> books) {
			string content = "";
			foreach (Book book in books) {
				content += book.ToString();
			}
			File.WriteAllText(path, content);
		}
	}
}
