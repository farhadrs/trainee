for (let i = 0; i <= 7; i++) {
  let out = '';
  for (let j = 0; j <= i; j++)
    out += '#';
    console.log(out);
}

for (let n = 1; n <= 15; n++) {
  switch (true) {
    case (n % 3 === 0 && n % 5 === 0):
      console.log('fizzBuzz');
      break;l
    case (n % 5 === 0):
      console.log('Buzz');
      break;
    case (n % 3 === 0):
      console.log('Fizz');
      break;
    default:
      console.log('nabood');  
  }
}

for (let row = 0; row <= 7; row++) {
  let grid = '';
  if (row % 2 === 0) {
    for (let col = 1; col <= 8; col++) {
      if (col % 2 === 0) {
        grid += '#';
      } else {
        grid += ' ';
      }
    }
  } else {
    for (let col = 1; col <= 8; col++) {
      if (col % 2 != 0) {
        grid += '#';
      } else {
        grid += ' ';
      }
    }
  }
  // console.log(grid);
}

function myMin(num1, num2) {
  if (num1 < num2) return num1;
  return num2;
}

function myMin2(arr) {
  return arr.reduce((acc, cur) => {
    acc = cur > acc ? cur : acc;
    return acc;
  });
}

function isEven(num) {
  if (num === 0) return 'Even';
  if (num === 1) return 'Odd';
  return isEven(num - 2);
}

function countBs(str) {
  const arr = str.split('');
  return arr.reduce((acc, cur) => {
    let out = cur === "B" ? 1 : 0;
    return acc + out;
  }, 0);
}

function countChar(str, ch) {
  const arr = str.split('');
  return arr.reduce((acc, cur) => {
    let count = cur === ch ? 1 : 0;
    return acc + count;
  }, 0);
}

function* range(start, end) {
  let a = start;
  while (a < end) {
    yield (a);
    a++;
    return a;
  }
}

function reverseArray(arr) {
  let out = [];
  for (let i = arr.length; i >= 0; i--) {
    out.push(i);
  }
  return out;
}

function reverseArrayInPlace(arr) {
  middle = Math.floor(arr.length / 2);
  let temp;
  for (i = 0; i < middle; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {                      
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(v1, v2) {
    return (v1.x + v2.x + v1.y + v2.y);
  }
  minus(v1, v2) {
    return (v1.x - v2.x - v1.y - v2.y);
  }
}

const vec1 = new Vec(12,15);
const vec2 =  new Vec(43,1);

vector = {
  x: 12,
  y: 12
}

class Group {
  constructor(...args) {
    this.args = args;
  }
  add(element) {
    this.args.push(element); 
  }
  delete(element) {
    if (this.args.includes(element)) {
      let index = this.args.indexOf(element);
      this.args.splice(index,1);
    }
  }
  has(element) {
    return this.args.includes(element);
  }
}

// Borrowing a  Method

let map = {one: true, two: true, hasOwnProperty: true};