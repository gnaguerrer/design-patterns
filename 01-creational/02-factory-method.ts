/**
 * ! Factory Method:
 * The Factory Method pattern allows creating objects without specifying
 * the exact class of the object that will be created.
 *
 * Instead, we delegate object creation to subclasses or methods
 * that encapsulate this logic.
 *
 * * It is useful when a class cannot anticipate the class
 * * of objects it needs to create.
 *
 * https://refactoring.guru/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa de pollo");
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa de res");
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa de frijol");
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function mainBurger() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa quieres? ( chicken/beef/bean )"
  );

  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;

    case "beef":
      restaurant = new BeefRestaurant();
      break;

    case "bean":
      restaurant = new BeanRestaurant();
      break;

    default:
      throw new Error("Opción no válida");
  }

  restaurant.orderHamburger();
}

// mainBurger();

/**
 * !Description:
  1.	Complete the SalesReport and InventoryReport classes to implement
      the Report interface, generating the content of each report in the generate method.
      
  2.	Implement the SalesReportFactory and InventoryReportFactory classes
      to create instances of SalesReport and InventoryReport, respectively.

  3.	Test the program by generating different types of reports using
      the prompt to select the report type.
 */

// ==========================================
//        Proposed Implementation
// ==========================================

interface ReportDocument {
  generate(): void;
}

class SalesReport implements ReportDocument {
  generate(): void {
    console.log("Generating sales report...");
  }
}

class InventoryReport implements ReportDocument {
  generate(): void {
    console.log("Generating inventory report...");
  }
}

abstract class ReportFactory {
  protected abstract createReport(): ReportDocument;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesFactory extends ReportFactory {
  override createReport(): ReportDocument {
    return new SalesReport();
  }
}

class InventoryFactory extends ReportFactory {
  override createReport(): ReportDocument {
    return new InventoryReport();
  }
}

function mainReport() {
  let report: ReportFactory;

  const reportType = prompt("Choose a report type? ( sales/inventory )");

  switch (reportType?.trim()) {
    case "sales":
      report = new SalesFactory();
      break;

    case "inventory":
      report = new InventoryFactory();
      break;

    default:
      throw new Error("No valid option");
  }

  report.generateReport();
}

mainReport();
