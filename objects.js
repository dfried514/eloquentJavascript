// let rabbit = {};
// rabbit.type = 'fat rabbit';
// rabbit.speak = function(line) { console.log(`The ${this.type} says ${line}`); }

// console.log(rabbit.type);
// rabbit.speak('I am hungry.');

// let monkey = { type: 'primate' };

// rabbit.speak.apply(monkey, ['Peanuts are tasty']);
// rabbit.speak.call(monkey, 'More bananas and nuts please.');

// let empty = {};
// console.log(empty.toString()); // prototype chain up to Object.prototype
// console.log(Object.getPrototypeOf({}) === Object.prototype); // true
// console.log(Object.getPrototypeOf(Object.prototype));  // null

// let protoRabbit = {
//   speak: function(line) {
//     console.log(`The ${this.type} rabbit says ${line}`);
//   }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("Yeahhhhhhh!");
// console.log(Object.getPrototypeOf(protoRabbit));

function Cat(type) {
  this.type = type;
}

function DomesticCat(type) {
  Cat.call(this, type);
}

DomesticCat.prototype = Object.create(Cat.prototype);
DomesticCat.prototype.rest = function() {
  console.log('laying down');
}

Cat.prototype.purr = function() {
    console.log('meow');
  }

var lion = new Cat('lion');
var chetah = new Cat('chetah');
var toby = new DomesticCat('toby');
toby.rest();
toby.purr();
console.log('is a cat', toby instanceof Cat);

console.log(Object.getPrototypeOf(Cat));
console.log(Object.getPrototypeOf(lion));

Cat.prototype.speak = function(line) {
  console.log(`This ${this.type} says ${line}`);
}

lion.talk = function() {
  console.log('browww');
}

lion.purr();

lion.speak('I am hungry');

lion.talk();

for (let prop in lion) {
  console.log(prop);
}

console.log('toString' in lion);

lion.type = 'tiger';

Object.defineProperty(Cat.prototype, 'fur', {
  get: function() { return this._fur; },
  set: function(val) { this._fur = val; }
});

lion.fur = 'shaggy';
console.log(lion.fur);

console.log(lion instanceof Cat);


