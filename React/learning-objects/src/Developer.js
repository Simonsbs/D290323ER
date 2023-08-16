import Human from "./Human";

class Developer extends Human {
  constructor(name, programmingLanguage) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }

  whatLanguagesDoIKnow() {
    return "I know " + this.programmingLanguage;
  }
}

export default Developer;
