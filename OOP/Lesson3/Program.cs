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
			
			//Console.WriteLine(e1.myID);


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

			/*
			UserProfile u = new	UserProfile();
			/*
			// Only works if we remove the readonly from the fields
			u.userID = 456;
			u.creationDate = DateTime.Now;
			*/
			/*
			u.DisplayProfileInfo();
			
			UserProfile u2 = new UserProfile(1234);
			u2.DisplayProfileInfo();
			*/
				

			/*
			 *
				Create Constants
			   
			   Create a new C# class named MathConstants.
			   Inside MathConstants, declare const fields for common mathematical constants: Pi (3.14159) and E (2.71828).
			   
			
				- Use Constants in Calculations
			   In the MathConstants class, add a static method named CalculateCircumference that takes a double 
				radius as an input and returns the circumference of a circle using Pi.
				-- https://www.google.com/search?q=circle+circumference+equation
			    -- 2 * Pi * radius

			   Add another static method named CalculateExponential that takes a double base as an input and 
				returns the exponential of that base raised to the power of E.
			   Attempt to Modify Constants
			    -- https://en.wikipedia.org/wiki/Exponential_function
			    -- Math.Pow(baseValue, E)
			   
			   ** Try ** to modify the value of Pi and E within a method in the MathConstants class.
			   Observe and note the compiler error.
			   Compare const with readonly
			   
			   Add a readonly field named creationDate initialized to the current date and time in the MathConstants class.
			   
			   Test Your Class
			   In the Main method of a new console application, 
				use the CalculateCircumference and CalculateExponential methods with different inputs and display the results.
			 *
			 */

			Console.WriteLine($"circle circumfrence: {MathConstants.CalculateCircumference(3)}");
			Console.WriteLine($"exponant: {MathConstants.CalculateExponential(5)}");

			
		}
	}
}
