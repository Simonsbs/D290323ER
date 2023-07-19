function createAdder(startFrom) {
  let counter = startFrom - 1;

  let func = () => {
    counter += 1;
    return counter;
  };

  return func;
}

function createAdder2(startFrom) {
  return function () {
    return startFrom++;
  };
}

function createAdder3(startFrom) {
  return () => startFrom++;
}

function ExSolution() {
  let adder = createAdder(10);

  let adder2 = createAdder2(20);

  let adder3 = createAdder3(30);

  //console.log(adder);

  console.log(`counter is: ${adder()}`);
  console.log(`counter is: ${adder()}`);
  console.log(`counter is: ${adder()}`);
  console.log(`counter is: ${adder()}`);

  console.log(`counter2 is: ${adder2()}`);
  console.log(`counter2 is: ${adder2()}`);
  console.log(`counter2 is: ${adder2()}`);
  console.log(`counter2 is: ${adder2()}`);

  console.log(`counter3 is: ${adder3()}`);
  console.log(`counter3 is: ${adder3()}`);
  console.log(`counter3 is: ${adder3()}`);
  console.log(`counter3 is: ${adder3()}`);

  return <>Solution</>;
}

export default ExSolution;
