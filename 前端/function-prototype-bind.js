function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};

// implementation
Function.prototype.myBind = function (thisObject, name) {
  var fn = this;
  function newConstructor(color) {
    return fn.call(
      this instanceof newConstructor ? this : thisObject,
      name,
      color
    );
  }
  return newConstructor;
};

// helper function
function inherits(Child, Parent) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

const Cat = Animal.myBind(null, "cat");

inherits(Cat, Animal);

const cat = new Cat("white");
if (
  cat.say() === "I'm a white cat" &&
  cat instanceof Cat &&
  cat instanceof Animal
) {
  console.log("success");
}
