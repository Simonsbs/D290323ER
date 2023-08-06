import { useEffect } from "react";
import "./App.css";
import MyRouter from "./components/MyRouter";
/*
function fiboGenerator() {
  let a = 0;
  let b = 1;

  return function () {
    let temp = a;
    [a, b] = [b, a + b];
    return temp;
  };
}

function* fiboGenerator2() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function* yieldDemo() {
  yield 111;
  yield 222;
  yield 333;
}
*/
function App() {
  // let a = 2;
  // let b = 4;

  // console.log(`a: ${a}; b: ${b}`);
  // /*let temp = a;
  // a = b;
  // b = temp;*/
  // [b, a] = [a, b];
  // console.log(`a: ${a}; b: ${b}`);

  /*let gen = fiboGenerator();
  console.log(gen());
  console.log(gen());
  console.log(gen());
  console.log(gen());*/

  // let gen = fiboGenerator2();
  // for (let i = 0; i < 100; i++) {
  //   console.log(gen.next().value);
  // }

  // let y = yieldDemo();
  // console.log(y.next().value);
  // console.log(y.next().value);
  // console.log(y.next().value);
  // console.log(y.next().value);

  useEffect(() => {
    if (!localStorage.getItem("UserData")) {
      const users = [
        {
          id: "123",
          firstName: "Simon",
          lastName: "Stirling",
          email: "a@b.com",
          password: "1234",
        },
      ];

      localStorage.setItem("UserData", JSON.stringify(users));
    }
  }, []);

  return <MyRouter />;
}

export default App;
