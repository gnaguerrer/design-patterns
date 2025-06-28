// ==========================================
//        Course Implementation
// ==========================================

// 1. Definir la interfaz Report
interface CourseReport {
  generate(): void;
}

// 2. Clases concretas de Reportes
// Implementar SalesReport e InventoryReport

class CourseSalesReport implements CourseReport {
  generate(): void {
    console.log("Generando reporte de ventas...");
  }
}

class CourseInventoryReport implements CourseReport {
  generate(): void {
    console.log("Generando reporte de inventario...");
  }
}

// 3. Clase Base ReportFactory con el Método Factory

abstract class CourseReportFactory {
  protected abstract createReport(): CourseReport;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

// 4. Clases Concretas de Fábricas de Reportes

class CourseSalesReportFactory extends CourseReportFactory {
  createReport(): CourseReport {
    return new CourseSalesReport();
  }
}

class CourseInventoryReportFactory extends CourseReportFactory {
  createReport(): CourseReport {
    return new CourseInventoryReport();
  }
}

// 5. Código Cliente para Probar

function mainCourse() {
  let reportFactory: CourseReportFactory;

  const reportType = prompt("¿Qué tipo de reporte deseas? (sales/inventory)");

  if (reportType === "sales") {
    reportFactory = new CourseSalesReportFactory();
  } else {
    reportFactory = new CourseInventoryReportFactory();
  }

  reportFactory.generateReport();
}

mainCourse();
