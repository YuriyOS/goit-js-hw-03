const products = [
  { name: "Радар", price: 1300, quantity: 4 }, // Value
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const arrValues = [];

  for (const value of arr) {
    const keys = Object.keys(value);

    for (const key of keys) {
      if (key === prop) {
        arrValues.push(value[prop]);
      }
    }
  }
  return arrValues;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
