function expect(value) {
  return {
    toBe: (expectedValue) => {
      if (value === expectedValue) {
        return true;
      } else {
        return false;
      }
    },
    notToBe: (expectedValue) => {
      if (value !== expectedValue) {
        return true;
      } else {
        return false;
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

  console.log(`toBe: ${tmp.toBe(5)}`);
  console.log(`notToBe: ${tmp.notToBe(5)}`);

  // -----------------------------------------------------

  console.log(`toBe: ${expect(5).toBe(5)}`);
  console.log(`notToBe: ${expect(6).notToBe(4)}`);

  //console.log(tmp);

  return <>Solution 2</>;
}

export default ExSolution2;
