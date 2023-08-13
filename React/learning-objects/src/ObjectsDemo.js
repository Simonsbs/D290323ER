import Animal from "./Animal";
import Dog from "./Dog";

function ObjectsDemo() {
  const a1 = new Animal("Bob");
  const a2 = new Animal("Jim");

  const d1 = new Dog("Fido", "Doberman");

  //console.log(a1);

  console.log(d1);

  return (
    <>
      <h1>Objects Demo</h1>
      <ul>
        <li>a1: {a1.whoAreYou()}</li>
        <li>a2: {a2.whoAreYou()}</li>
      </ul>
      <hr />
    </>
  );
}

export default ObjectsDemo;
