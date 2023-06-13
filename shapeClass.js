// Shape class definition
class Shape {
    constructor(name) {
      this.name = name;
    }
  
    describe() {
      return `This is a ${this.name}.`;
    }
  
    // Challenge 2:
    calculateArea() {
      console.log(`${this.name} does not have a defined area calculation.`);
    }
  
    // Challenge 3:
    static info() {
      console.log("This is a Shape class.");
    }
  }
  
  // Challenge 2:
  const shape2 = new Shape("Shape2");
  console.log(shape2.describe());
  shape2.calculateArea();
  
  // Challenge 3:
  Shape.info();
  const shape3 = new Shape("Shape3");
  shape3.describe();
  
  // Export Shape class
  module.exports = Shape;
  