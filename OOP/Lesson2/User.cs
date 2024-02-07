using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2 {
	internal class User {
		public string email;
		public string password;
		public string name;
		public string address;
		public string phone;
		public string creditCard;
		public string ssn;
		public string dob;
		public string motherMaidenName;

		public User(string email, string password, string name, string address, string phone, string creditCard, string ssn, string dob, string motherMaidenName) {
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
			this(username, password, "", "", "", "", "", "", "") {

		}
	}
}
