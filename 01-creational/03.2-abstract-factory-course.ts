// ==========================================
//        Course Implementation
// ==========================================

// 1. Interfaces de Vehicle y Engine
interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos

class CourseElectricCar implements Vehicle {
  assemble(): void {
    console.log("Ensamblando un auto eléctrico");
  }
}

class CourseGasCar implements Vehicle {
  assemble(): void {
    console.log("Ensamblando un auto de combustión");
  }
}

class CourseElectricEngine implements Engine {
  start(): void {
    console.log("Arrancando motor eléctrico");
  }
}

class CourseGasEngine implements Engine {
  start(): void {
    console.log("Arrancando motor de combustión");
  }
}

// 3. Interfaz de la Fábrica Abstracta

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas
class CourseElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new CourseElectricCar();
  }

  createEngine(): Engine {
    return new CourseElectricEngine();
  }
}

class CourseGasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new CourseGasCar();
  }
  createEngine(): Engine {
    return new CourseGasEngine();
  }
  // Implementación de los métodos createVehicle y createEngine
}

// 5. Código Cliente

function main(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

// Pruebas
console.log("Creando vehículo eléctrico:");
main(new CourseElectricVehicleFactory());

console.log("\nCreando vehículo de combustión:");
main(new CourseGasVehicleFactory());
