const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');


// console.log(map1.get(key1));

// console.log(map1.size);

for (let [key, value] of map1) {
  console.log(`${key} : ${value}`);
}

for (let key of map1.keys()) {
  console.log();
}

const keyValueArr = Array.from(map1);


const set1 = new Set();

set1.add(100);
set1.add({ name: 'john' });
set1.add('A string');
set1.add(100);

const set2 = new Set([1, true, 'string']);

console.log(set1.size);
console.log(set1.has(100));
console.log(set1.has({name: 'john'}));

set1.delete(100);

for (let item of set1) {
  console.log(item);
}

// for (let item of set1.keys() and values() and .entries()) {
//   console.log(item);
// }

const arr = Array.from(set1);
console.log(arr);