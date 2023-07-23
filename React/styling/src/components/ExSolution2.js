function expect(value) {
  return {
    toBe: (expectedValue) => {
      if (value === expectedValue) {
        return true;
      } else {
        throw new Error("values are not equal");
      }
    },
    notToBe: (expectedValue) => {
      if (value !== expectedValue) {
        return true;
      } else {
        throw new Error("values are equal");
      }
    },
  };
}

function ExSolution2() {
  const tmp = expect(5);
  //   tmp.toBe(6);
  //   tmp.notToBe(8);

  //console.log(`toBe: ${expect(5).toBe(5)}`);
  //console.log(`notToBe: ${expect(5).notToBe(5)}`);

  try {
    console.log(`toBe 1: ${tmp.toBe(5)}`);
  } catch (error) {
    console.log("toBe 1: " + error.message);
  }

  try {
    console.log(`notToBe 2: ${tmp.notToBe(5)}`);
  } catch (error) {
    console.log("notToBe 2: " + error.message);
  }

  // -----------------------------------------------------

  try {
    console.log(`toBe 3: ${expect(5).toBe(4)}`);
  } catch (error) {
    console.log("toBe 3: " + error.message);
  }

  try {
    console.log(`notToBe 4: ${expect(6).notToBe(4)}`);
  } catch (error) {
    console.log("notToBe 4: " + error.message);
  }

  //console.log(tmp);

  return <>Solution 2</>;
}

export default ExSolution2;
