import Animal from "./Animal";

function Cat(name, livesLeft) {
  Animal.call(this, name);
  this.livesLeft = livesLeft;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.jump = function () {
  return this.name + " jumped! and still has " + this.livesLeft + " lives left";
};

export default Cat;
