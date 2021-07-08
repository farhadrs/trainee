// Object.defineProperty(thsi, 'propertyName', { get: or set: });

function StopWatch() {
  let start, stop, state, duration = 0;
  this.start = function() {
    if (state) throw Error('Already running...');
    state = true;
    start = Date.now();
  },
  this.stop = function() {
    if (!state) throw Error('Already stopped...');
    stop = Date.now();
  },
  this.duration = function() {
    return (Math.floor((stop-start)/1000));
  },
  this.reset = function() {
    start, stop, duration = 0;
    state = false;
  }
}

const sw = new StopWatch();

// Prototype == Parent
// Object.getPrototypeOf(x);
// array => arrayBase => Prototype
// Object.getOwnPropertyDecriptor()

// Object.defineProperty(thsi, 'propertyName', { get: or set: or writable: false, enumarable: true});
// Instance memebrs and Prototype members
// Object.keys() only return instance members (Own members)
// ob.hasOwnProperty() will show all isnstance members
// why we do prototype members, because having alot of instances in object will cause memory waste.
// childObj.prototype = Object.create(Obj.prototype) -> Inheritance
// function extend(Child, Parent) { childObj.prototype = Object.create(Obj.prototype) }

// Mixin
// canEat = {}, canWalk ={}
// newObject = Object.assign({}, canEat, canWalk)
// function mixin(target, ...sources) { Object.assign(target, ...sources) }

// ES6
// Public interface & Implementation details
// Symbol(), _variable, WeakMap()

// module.export = Circle;
// const Circle = require('../circle);
// export class & import {Circle} from './circle

