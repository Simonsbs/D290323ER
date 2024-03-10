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

			double a = 1.2;
			int b = (int)a;
			double c = (double)b;
		}
	}
}
