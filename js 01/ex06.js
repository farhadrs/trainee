// JS Patterns

// 1. Module (IIFE) Standard and Revealing
(function() {
  // Declare private var and funcs
  return {
    // Declare public var and funcs
  }
})();

// 2. Singleton
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'John'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) instance = createInstance();
      return instance;
    }
  }
})();
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// 3. Factory (Interface to create Objects)
function MemberFactory() {

  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'SuperMembership') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define =function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    return member;
  }
}

function SimpleMembership(name) {
  this.name;
  this.cost ='$5';
}

function StandardMembership(name) {
  this.name;
  this.cost = '$10';
}

function SuperMembership(name) {
  this.name;
  this.cost = '$15';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Dow', 'simple'));

members.forEach(member => member.define());

// 4. Observer (Noftify DOM to update elements, events)
// 5. Mediator (Communicate with callees like chatroom)
// 6. State (State managers like redux)

