// push, pop, shift, unshift, splice(strt, del, items)
// indexOf, lastInedxOf, includes
// array_with_refrence_type .find(function() {}), .findIndex(function() {})
// .find((item => {})
// array = [], array.length = 0, splice(0, array.length)
// first.concat(second), combined.slice(2, 4)
// [...first, ...second], [...combined]
// array.forEach((item, index) => {})
// array.join(', or - or _ or etc.') -> string
// string.split(' ') -> array
// array.sort, obj.sort((a, b) => {a < b => return -1 && a > b => return 1 && a === b => return 0})
// array.every(value => { return condition }), array.some(value => { return condition }), 
// array.filter(value => { return condition }) -> NEW Array
// array.map(item => return '<li> + item + </li>') -> NEW Array
// let sum = array.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);

function arrayFromRange(min, max) {
  let dest = [];
  for (let i = min; i <= max; i++)
    dest.push(i);
  return dest;
}

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

function except(array, exclude) {
  let dest = [];
  for (let element of array)
    if (!exclude.includes(element))
      dest.push(element);
  return dest;    
}

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0)
    console.error('Invalid Offset.')
  let dest = [...array];
  let element = dest.splice(index, 1)[0]; 
  dest.splice(index + offset, 0, element);
  return dest;
  
}

function countOccurences(array, searchElement) {
  // let count = 0;
  // for (let element of array) 
  //   if (element === searchElement)
  //     count++;
  // return count;
  return array.reduce((acc, cur) => {
    const count = cur === searchElement ? 1 : 0;
    return acc + count;
  },0)
}

function getMax(array) {
  let max = 0;
  if (array.length === 0)
    return false;
  
  // for (let element of array) 
  //   if (element > max)
  //     max = element
  // return max;
  return array.reduce((acc, cur) => cur > acc ? cur : acc);
}

function myMovie(array) {
  return array
    .filter(m => m.rating > 4 && m.year === 2018)
    // .sort((a, b) => b.rating - a.rating)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
    .join(',');
}

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

console.log(myMovie(movies));