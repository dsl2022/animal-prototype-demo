class Car {
    constructor(model,color,year){
        this.model = model
        this.color = color
        this.year = year
        // finish the constructor
    }
    // TODO: static method to describe this car.
    start(){
        console.log(`${this.model} is starting...`)
        // TODO finish the function
    }
    stop(){
        console.log(`${this.model} is stopping...`)
        // TODO finish the function
    }
}

class Tesla extends Car{
    constructor(model, color, year){
        super(model, color, year)
        this.model = model
        this.color = color
        this.year = year
    }
    // static describe(){
    //     console.log(`
    //     ${this.model} is
    //     ${this.color} and is made 
    //     ${this.year}
    //     `)
    // }
    charge(){
        console.log(`${this.model} is charging`)
    }
}

const myNewCar = new Tesla("Model X","red","2023")
// myNewCar.describe()
myNewCar.start()
myNewCar.stop()
myNewCar.charge()

// Tesla class definition, extend the car class and inherit the car class 
// create an instance of the Tesla class, and start engine