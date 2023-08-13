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

  console.log(simonsDog);

  //simonsDog.bark();

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
