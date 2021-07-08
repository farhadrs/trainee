//  Function "arguments". console.log(arguments)
// function funcName(...args), args is an array of elements

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// getters => access properties
// setters => change (mutate) properties

// throw new Error('Error message')
// try { the work you need } catch(e) { send the error } 

// var -> function scoped and let / const -> block scoped

// this
// method -> obj
// function -> global (window, global) 

// const video = {
//   title: 'a',
//   tags: [1,2,3],
//   show() {
//     const self = this;
//     this.tags.forEach(tag => {
//       console.log(this, tag);
//     }, this); or .bind(this);
//   }
// }

// .call({ obj }, 1, 2);
// .bind({ obj }, [1, 2]);
// .apply({ obj }, ());

function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];
  return args.reduce((acc, cur) => acc + cur);
}

const circle1 = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw Error('Input is not an array');
  return array.reduce((acc, cur) => {
    const count = (cur === searchElement) ? 1 : 0
    return count + acc;
  }, 0);
}

try {
  let arr = [1,2,3,3,4,3];
  // console.log(countOccurences(arr, 3));
  console.log(countOccurences(true, 3));
} catch {
  console.log('Error');
}

const Developer = {
  a: {
    b:1, c:2
  },
  g: [{ j:10, k: 40 }],
  d: {
    h: {
      o: 10
    }
  },
  p: 10
}