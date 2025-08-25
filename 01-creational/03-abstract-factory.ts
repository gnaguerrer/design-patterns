/**
 * ! Abstract Factory:
 * A design pattern that allows creating families of related objects
 * without specifying their concrete classes.
 *
 * Instead of creating individual objects directly,
 * we create factories that produce a set of related objects.
 *
 * * It is useful when you need to create objects that are part of a family
 * * and you want to ensure these objects complement each other.
 *
 * https://refactoring.guru/design-patterns/abstract-factory
 */

/**
 * !Instructions:
  1. Complete the Product Classes:
    • ElectricCar must implement Vehicle and display the message "Assembling an electric car".
    • GasCar must implement Vehicle and display the message "Assembling a combustion car".
    • ElectricEngine must implement Engine and display the message "Starting electric engine".
    • GasEngine must implement Engine and display the message "Starting combustion engine".

  2. Complete the Factory Classes:
    • ElectricVehicleFactory must create an ElectricCar and an ElectricEngine.
    • GasVehicleFactory must create a GasCar and a GasEngine.

  3. Test the Code:
    • Run the code to ensure each factory produces the correct type of vehicle and engine.

 */

// ==========================================
//        Proposed Implementation
// ==========================================

interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log("Assembling an electric car");
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log("Assembling a combustion car");
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log("Starting electric engine");
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log("Starting combustion engine");
  }
}

// 3. Interfaz de la Fábrica Abstracta

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas

class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }

  createEngine(): Engine {
    return new ElectricEngine();
  }
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }

  createEngine(): Engine {
    return new GasEngine();
  }
}

// 5. Código Cliente

function mainVehicle(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

// Pruebas
console.log("Creando vehículo eléctrico:");
mainVehicle(new ElectricVehicleFactory());

console.log("\nCreando vehículo de combustión:");
mainVehicle(new GasVehicleFactory());
