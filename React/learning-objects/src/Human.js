class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    console.log("new human created");
  }

  describe() {
    return `Im a Human and my name is ${this.name}`;
  }

  changeMyNameToBob() {
    this.name = "Bob";
  }

  itMyBirthDay() {
    this.age += 1;
  }
}

export default Human;
