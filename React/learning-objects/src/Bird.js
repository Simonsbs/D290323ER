import Animal2 from "./Animal2";

class Bird extends Animal2 {
  speak() {
    return `${this.animalName} chirp!`;
  }
}

export default Bird;
