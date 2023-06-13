class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class's constructor with the 'name' argument
      this.breed = breed;
    }
  
    makeSound() {
      super.makeSound(); // Call the parent class's 'makeSound' method
      console.log("Dog barks");
    }
  }
  
  const myDog = new Dog("Max", "Labrador");
  console.log(myDog.name); // Output: Max
  console.log(myDog.breed); // Output: Labrador
  myDog.makeSound();
  // Output:
  // Animal makes a sound
  // Dog barks
  