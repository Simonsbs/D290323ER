import Animal2 from "./Animal2";

class Lion extends Animal2 {
  speak() {
    return `${this.animalName} ROAR!`;
  }
}

export default Lion;
