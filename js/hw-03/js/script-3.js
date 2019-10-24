const findBestEmployee = function(employees) {
  let max = 0;
  let name;

  const keys = Object.entries(employees);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i][1] > max) {
      max = keys[i][1];
      name = keys[i][0];
    }
  }

  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
