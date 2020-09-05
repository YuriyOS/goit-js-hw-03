const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  let productivity = 0;

  for (const value of values) {
    if (value > productivity) {
      productivity = value;
    }
  }

  const indexValue = values.indexOf(productivity);
  return keys[indexValue];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
// lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
