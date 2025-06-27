/**
 * ! Builder Pattern:
 * It is a creational design pattern that lets us construct complex objects
 * step by step.
 *
 * * It's useful when we need to build a complex object with many parts
 * * and we want the construction process to be independent of the parts
 * * that make it up.
 *
 * https://refactoring.guru/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  displayConfiguration() {
    console.log(`Computer configuration:
      CPU: ${this.cpu}  
      RAM: ${this.ram}  
      Storage: ${this.storage}  
      GPU: ${this.gpu ?? "Not defined"}  
      `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU("Intel Core 2 Dúo")
    .setRAM("4GB")
    .setStorage("256GB")
    .build();

  console.log("Basic Computer");
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCPU("Intel i9")
    .setRAM("64GB")
    .setStorage("1TB M2")
    .setGPU("Nvidia RTX 5090")
    .build();

  console.log("Gaming Computer");
  gamingComputer.displayConfiguration();
}

// main();

//! Task: Create a custom QueryBuilder to construct SQL queries
/**
 * Must have the following methods:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- if no fields are passed, select all with (*)
 * - where(condition: string): QueryBuilder - optional
 * - orderBy(field: string, order: string): QueryBuilder - optional
 * - limit(limit: number): QueryBuilder - optional
 * - execute(): string - returns the SQL query
 * 
 ** Usage example:
  const usersQuery = new QueryBuilder("users") // users is the table name
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Query: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

// ==========================================
//        Proposed Implementation
// ==========================================

type Order = "ASC" | "DESC";

class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private orderField?: string;
  private order: Order = "DESC";
  private limitValue?: number;
  private whereConditions: string[] = [];

  constructor(table: string) {
    this.table = table;
  }

  select(fields: string[]): QueryBuilder {
    this.fields = fields;
    return this;
  }

  orderBy(field: string, order: Order): QueryBuilder {
    this.orderField = field;
    this.order = order;
    return this;
  }

  limit(value: number): QueryBuilder {
    this.limitValue = value;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.whereConditions.push(condition);
    return this;
  }

  execute() {
    const fields = this.fields.length ? this.fields.join(", ") : "*";

    const whereConditions = this.whereConditions.length
      ? `WHERE ${this.whereConditions.join(" AND ")}`
      : "";

    const order = this.orderField
      ? `ORDER BY ${this.orderField} ${this.order}`
      : "";

    const limit = this.limitValue ? `LIMIT ${this.limitValue}` : "";

    return `Select ${fields} from ${this.table} ${whereConditions} ${order} ${limit}`;
  }
}

function queryBuilder() {
  const usersQuery = new QueryBuilder("users") // users is the table name
    .select(["id", "name", "email"])
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log("Query: ", usersQuery);
}

queryBuilder();
