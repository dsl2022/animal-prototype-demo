class Animal{
    constructor(name){
        this.name = name
    }
    static info(){
        console.log("This is a class for animals")
    }
    sound(){
        console.log(this.name + " makes sound")
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name)
        this.name = name;
    }
    bark() {
        console.log(this.name + ' woof woof')
    }
}

class Cat extends Animal{
    constructor(name) {
        super(name)
        this.name = name
    }
    meow() {
        console.log(this.name +' meow meow')
    }
}

const animal = new Dog("Marissa")

animal.sound()