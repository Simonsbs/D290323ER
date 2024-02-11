using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Lesson3 {
	internal class Program {
		static void Main(string[] args) {
			/*Console.WriteLine($"50F = {ConvertionTools.ConvertFahrenheitToCelcius(50.0)}C");
			Console.WriteLine($"10F = {ConvertionTools.ConvertCelciusToFahrenheit(10.0)}C");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 Mile = {ConvertionTools.ConvertMilesToKilometers(1.0)}");
			Console.WriteLine($"1 Kilometer = {ConvertionTools.ConvertKilometersToMiles(1.0)}");
			Console.WriteLine("----------------------------");
			Console.WriteLine($"1 pound = {ConvertionTools.ConvertPoundsToKilograms(1.0)}");
			Console.WriteLine($"1 kilo = {ConvertionTools.ConvertKilogramsToPounds(1.0)}");
			*/
			
			Example1 e1 = new Example1();
			//e1.myID = 123;
			
			// Cant do this since the data field is readonly
			//e1.data = new Data();
			e1.data.value = 789;
			
			Console.WriteLine(e1.myID);


			/*
			int a = 123;
			Console.WriteLine(a);
			int b = a;
			a = 456;
			Console.WriteLine(b);

			*/
			/*
			Data d1 = new Data();
			d1.value = 123;
			Console.WriteLine(d1.value);

			Data d2 = d1;
			d1.value = 456;
			Console.WriteLine(d2.value);*/


			/*
			 *
			   Create a Class with Readonly Fields
			   
			   Define a class named UserProfile.
			   Inside UserProfile, declare two readonly fields: userId (of type int) and creationDate (of type DateTime).
			   Initialize Readonly Fields
			   
			   Create a constructor for the UserProfile class that assigns values to both readonly fields.
			   userId should be assigned a new int (can use random if feeling lucky).
			   creationDate should be assigned the current date and time.
			   ** Attempt ** to Modify Readonly Fields
			   
			   Add a method named UpdateProfile to the UserProfile class.
			   Inside UpdateProfile, ** attempt ** to modify the values of userId and creationDate.
			   Observe and note the compiler errors.
			   Read and Access Readonly Fields
			   
			   Create a method in the UserProfile class named DisplayProfileInfo that prints the values of userId and 
			   creationDate to the console.
			   Test Your Class
			   
			   In the Main method of your application, create an instance of UserProfile.
			   Call the DisplayProfileInfo method to display the initial values of userId and creationDate.
			   ** Attempt ** to call UpdateProfile and observe the result.
			 *
			 *
			 */

			//DateTime dt = DateTime.Now;


			UserProfile u = new	UserProfile();
			/*
			// Only works if we remove the readonly from the fields
			u.userID = 456;
			u.creationDate = DateTime.Now;
			*/
			u.DisplayProfileInfo();
			
			UserProfile u2 = new UserProfile(1234);
			u2.DisplayProfileInfo();
		}
	}
}
