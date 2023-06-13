const assert = require('chai').assert;
const Shape = require('./shapeClass');

describe('Shape', () => {
  let shape2;
  let shape3;

  beforeEach(() => {
    shape2 = new Shape("Shape2");
    shape3 = new Shape("Shape3");
  });

  it('should describe the shape correctly', () => {
    assert.equal(shape2.describe(), "This is a Shape2.");
    assert.equal(shape3.describe(), "This is a Shape3.");
  });

  it('should calculate area for valid shapes', () => {
    shape2.calculateArea(); // This should print the area calculation message
  });

  it('should display Shape class information', () => {
    Shape.info(); // This should print the Shape class information
  });
});
