// Prompt A (TS)

// “Implement a Sensor class that models a real-time temperature sensor.”

// Constructor takes:

// id: string

// temperature: number (°C)

// lastUpdated: Date

// Methods:

// updateTemperature(temp: number): void

// toFahrenheit(): number

// getLatestReading(): { id: string; tempC: number; tempF: number; lastUpdated: Date }

// Twist (very Jump-like):

// Add a method applyDrift(basisPoints: number) that adjusts the temperature by basis points.
// Temperature change = temperature * (basisPoints / 10000).

// Checkpoints:

// Do you choose getters/setters or direct fields? Explain why.

// Do you use private fields? Why or why not?

// How do you ensure the date always updates correctly?

// How do you handle rounding (or not rounding)?

class Sensor {
  id : string;
  temperature : number;
  lastUpdated : Date;

  constructor(id : string, temperature : number, lastUpdated : Date){
    this.id = id;
    this.temperature = temperature;
    this.lastUpdated = lastUpdated;
  } 

  updateTemperature(temp : number) : void {
    this.temperature = temp;
    this.lastUpdated = new Date();
  }

  toFahrenheit() : number {
    return (this.temperature * (9/5)) + 32;
  }

  getLatestReading() : {id : string; tempC : number; tempF : number; lastUpdated : Date} {
    return {
      id : this.id,
      tempC : this.temperature,
      tempF : this.toFahrenheit(),
      lastUpdated : this.lastUpdated,
    }
  }

  applyDrift(basisPoints : number) : void {
    const driftFactor = basisPoints / 10000;
    const tempChange = this.temperature * driftFactor;
    this.temperature = tempChange;
    this.lastUpdated = new Date();
  }
}