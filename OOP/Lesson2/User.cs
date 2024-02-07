using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class User {
		public int id;
		public string email;
		public string password;
		public string name;
		public string address;
		public string phone;
		public string creditCard;
		public string ssn;
		public string dob;
		public string motherMaidenName;

		public User(int id) {
			// GET USER WITH id FROM DB
			// CONNECTING... GETTING... READING... CLOSING...

			// this.id = db.id;
			// this.email = db.email;
			// this.password = db.password;
			// this.name = db.name;
			// this.address = db.address;
			// this.phone = db.phone;
			// this.creditCard = db.creditCard;
			// this.ssn = db.ssn;
			// this.dob = db.dob;
		}

		public User(int id, string email, string password, string name, string address, string phone, string creditCard, string ssn, string dob, string motherMaidenName) {
			this.id = id;
			this.email = email;
			this.password = password;
			this.name = name;
			this.address = address;
			this.phone = phone;
			this.creditCard = creditCard;
			this.ssn = ssn;
			this.dob = dob;
			this.motherMaidenName = motherMaidenName;
		}

		public User(string username, string password) :
			this(0, username, password, "", "", "", "", "", "", "") {

		}
	}
}
