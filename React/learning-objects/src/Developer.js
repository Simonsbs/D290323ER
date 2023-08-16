import Human from "./Human";

class Developer extends Human {
  constructor(name, age, programmingLanguage) {
    super(name, age);
    this.programmingLanguage = programmingLanguage;
  }

  whatLanguagesDoIKnow() {
    return "I know " + this.programmingLanguage;
  }
}

export default Developer;
