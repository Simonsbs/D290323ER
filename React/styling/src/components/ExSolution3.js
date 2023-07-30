function ExSolution3() {
  Date.prototype.nextDay = function () {
    var nextDayDate = new Date(this.valueOf());
    nextDayDate.setDate(nextDayDate.getDate() + 1);

    return nextDayDate;
  };

  const date1 = new Date("2023-07-30");
  console.log(`The new date is: ${date1.nextDay()}`);

  const date2 = new Date("2023-06-10");
  console.log(`The new date is: ${date2.nextDay()}`);

  const date3 = new Date();
  console.log(`The new date is: ${date3.nextDay()}`);

  return <>Solution 3</>;
}

export default ExSolution3;
