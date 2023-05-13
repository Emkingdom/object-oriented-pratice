class Vehicle {
  constructor(make, model, year, wheels) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = wheels;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, wheels = 4) {
    super(make, model, year, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, wheels = 2) {
    super(make, model, year, wheels);
  }

  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    const { vehicles, capacity } = this;
    let message = "";
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (capacity !== vehicles.length) {
      vehicles.push(vehicle);
      message = "Vehicle added!";
    } else {
      message = "Sorry, we're full.";
    }
    return message;
  }
}
