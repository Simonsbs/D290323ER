import Animal from "./Animal";
import Animal2 from "./Animal2";
import Bird from "./Bird";
import Cat from "./Cat";
import Developer from "./Developer";
import Dog from "./Dog";
import Human from "./Human";
import Lion from "./Lion";

function ObjectsDemo() {
  const a1 = new Animal("Bob");
  const a2 = new Animal("Jim");

  const d1 = new Dog("Fido", "Doberman");

  const c1 = new Cat("Mitzi", 6);

  //console.log(a1);

  //console.log(d1);

  const h1 = new Human("Bob", 30);
  const dev1 = new Developer("Simon", 20, "javascript");

  const a3 = new Animal2("Jim");
  const a4 = new Bird("Polly");
  const a5 = new Lion("Ted");

  return (
    <>
      <h1>Objects Demo</h1>
      <ul>
        <li>a1: {a1.whoAreYou()}</li>
        <li>a2: {a2.whoAreYou()}</li>
      </ul>
      <ul>
        <li>d1: {d1.bark()}</li>
      </ul>
      <ul>
        <li>c1: {c1.jump()}</li>
      </ul>
      <ul>
        <li>h1: {h1.describe()}</li>
      </ul>
      <ul>
        <li>dev1: {dev1.describe()}</li>
        <li>dev1: {dev1.whatLanguagesDoIKnow()}</li>
      </ul>
      <ul>
        <li>a3: {a3.speak()}</li>
        <li>a4: {a4.speak()}</li>
        <li>a5: {a5.speak()}</li>
      </ul>
      <hr />
    </>
  );
}

export default ObjectsDemo;
