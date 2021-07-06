function Address(street, city, zipcode) {
  this.street,
  this.city,
  this.zipcode,
  this.find = function() {
    console.log('I am here');
  }
}


function address(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
    find() {
      console.log('I was here');
    }
  }
}


let address1 = new Address('x', 'y', 12);
let address2 = new Address('x', 'y', 12);

function areEqual(address1, address2) {
function areSame(address1, address2) {
}}

let post = {
  title,
  bosy,
  author,
  views,
  comments: [{ author: 1, body: 2 }],
  isLive: true
}

function Post(title, body, author) {
  this.title = title,
  this.bosy = body,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isLive = true
}

