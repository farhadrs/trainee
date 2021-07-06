let hour = 10;
if (hour >= 6 && hour < 12)
  console.log('Good Morning');
else if (hour >= 12 && hour < 18)
  console.log('Good Afternoon');
else 
  console.log('Good Night');

// Factory functions create objects
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw from createCircle');
    }
  }
}

const circle = createCircle(2);
console.log(circle);

// Constructor functions create objects too
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw from Circle');
  }
}

const circle2 = new Circle(2);
console.log(circle2);

for (let key in circle) {
  console.log(key, circle[key]);
}

if ('radius' in circle) {
  console.log('True');
}

// Object.keys(object) translates an object to an Array which is itterable
for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// Cloning and Object

// Old approach
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }

// Modern approach 1
const another1 = Object.assign({}, circle);

// Modern approach 2
const another2 = { ...circle };