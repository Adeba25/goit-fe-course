const countTotalSalary = function(employees) {
  let total = 0;

  const arrEmployees = Object.entries(employees);

  for (let i = 0; i < arrEmployees.length; i++) {
    total += arrEmployees[i][1];
  }

  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
