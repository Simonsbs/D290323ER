function Animal(name) {
  this.name = name;

  //   this.whoAreYou = function () {
  //     return `this animal's name is ${this.name}`;
  //   };
}

Animal.prototype.whoAreYou = function () {
  return `this animal's name is ${this.name}`;
};

export default Animal;
