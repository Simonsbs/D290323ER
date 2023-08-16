class Animal2 {
  constructor(name) {
    this.animalName = name;
  }

  speak() {
    return `${this.animalName} makes a sound`;
  }

  run() {
    // do som e code too make the niaml run!!!
    console.log("Animal is running");
  }
}

export default Animal2;
