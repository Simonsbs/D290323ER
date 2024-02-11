using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson3 {
	internal class UserProfile {
		public readonly int userID;
		public readonly DateTime creationDate;

		public UserProfile() {
			Random rnd = new Random();
			userID = rnd.Next(1, int.MaxValue);

			creationDate = DateTime.Now;
		}

		public UserProfile(int userID) {
			this.userID = userID;
			creationDate = DateTime.Now;
		}

		/*
		// Only works if we remove the readonly from the fields
		public void UpdateProfile(int userID, DateTime creationDate) {
			this.userID = userID;
			this.creationDate = creationDate;
		}
		*/

		public void DisplayProfileInfo() {
			Console.WriteLine($"user: {userID}");
			Console.WriteLine($"creationDate: {creationDate}");
		}
	}
}
