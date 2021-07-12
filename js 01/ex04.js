// Event Loop
// Tick
// Sunc/Async
// Register

const fs = require('fs'); //Node

// let value = fs.readFileSync('test', 'utf-8');

// let value = fs.readFile('test', 'utf8', (err, data) => {
//   console.log(err);
//   console.log('******');
//   console.log(data);
// });
// console.log(value);

// Promiss
function f() {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) reject('Rejected');
      resolve(data);
    });
  });
}

f('test').then(res => {
  console.log(res);
}).catch(rej => {
  console.log(err);
});

// Promise.all().then().catch()

// console.time('Task');

function getAllFs() {
  let res1 = f1();
  let res2 = f2();
  let res3 = f3();
}

// Will respond all three in pending because they are Async. To solve this problem we need to force Sync


async function getAllFs() {
  let res1 = await f1();
  let res2 = await f2();
  let res3 = await f3();
}

// getAllFs().then().catch()

// Error handling
console.log(JSON.parse('{name: John}')); // String to Json
