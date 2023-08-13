import "./App.css";

function App() {
  // Object Literals:

  let person = {
    name: "Simon",
    age: 20,
    color: "Green",
    sayHello: () => {
      console.log(`Hey`);
    },
  };

  //person.sayHello();
  //person.color = "Pink";

  person = {
    name: "Bob",
    age: 30,
    color: "Purple",
    sayHello: () => {
      console.log(`Hey`);
    },
  };

  //person.sayHello();

  //person.color = "Yellow";

  // person = {
  //   name: "Jane",
  //   age: 40,
  //   color: "Blue",
  // };

  // Constructor Functions

  function Dog(name, age, color) {
    this.fullName = age > 12 ? name + " the old dog" : name + " the dog";
    this.ageInTwoYears = age + 2;
    this.color = "blue";
    this.legCount = 4;

    this.bark = () => {
      console.log(`Woof, my name is ${name}`);
    };
    this.rollOver = () => {
      console.log(`Rolled over`);
    };
  }

  //console.log(person);
  //console.log(Dog);

  let simonsDog = new Dog("Fido", 12, "Black");
  simonsDog = new Dog("Rex", 12, "Black");

  //console.log(simonsDog);

  //simonsDog.bark();

  // Object.create()

  const personProto = {
    name: "",
    sayHello: () => {
      console.log(`Hey`);
    },
  };

  const p1 = Object.create(personProto);
  //p1.name = "Simon";
  const p2 = Object.create(personProto);
  //p2.name = "Bob";

  // console.log(p1);
  // console.log(p2);

  // p1.sayHello();
  // p2.sayHello();

  // Classes
  class Person {
    constructor(firstName, lastName, age) {
      this.fullName = firstName + " " + lastName;
      this.age = age;

      this.planetOfLiving = "Earth";
    }

    sayHello() {
      console.log(`${this.fullName} says Hey from class obj`);
    }
  }

  /* 
    Book class:
    1. title
    2. author
    3. year of publish
    4. print function: print full details (prints all props to the console)

    Create 3 object instances with unique values and call the print function on each one

  */
  console.log(Person);

  const c1 = new Person("Simon", "Stirling", 20);
  const c2 = new Person("Bob", "Smith", 30);

  c1.sayHello();
  c2.sayHello();

  return (
    <>
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Color: {person.color}</li>
      </ul>
      <hr />
      <ul>
        <li>Name: {simonsDog.fullName}</li>
        <li>Age: {simonsDog.ageInTwoYears}</li>
        <li>Color: {simonsDog.color}</li>
      </ul>
    </>
  );
}

export default App;
