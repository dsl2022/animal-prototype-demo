// Shape class definition
function Shape(name) {
    this.name = name;
  }
  
  Shape.prototype.describe = function() {
    return "This is a " + this.name + ".";
  };
  
// Challenge 2:
// Extend the Shape class by adding a method called "calculateArea()". This method should print "[shape name] does not have a defined area calculation." Create a new instance of the Shape class and assign it to a variable named "shape2". Invoke both the describe() and calculateArea() methods on "shape2".

Shape.prototype.calculateArea = function(){
   console.log(`${this.name} does not have a defined area calculation.`)
}

Shape.prototype.Info = function(){
  console.log(`This is a ${this.name}.`)
}

// Challenge 3:
// Modify the Shape class to include a static method called "info()". The info() method should print "This is a Shape class." Create a new instance of the Shape class and assign it to a variable named "shape3". Call the info() method directly on the Shape class, without creating an instance. Then, call the describe() method on "shape3".
Shape.Info = function(){
  console.log("This is a Shape class.")
}

Shape.owner = function(){
  console.log(`owner is David`)
}

Shape.Info()
Shape.owner()

const shape2 = new Shape("Triangle")
shape2.Info()
// shape2.describe()
// shape2.calculateArea()
// // Export Shape class
module.exports = Shape;
  