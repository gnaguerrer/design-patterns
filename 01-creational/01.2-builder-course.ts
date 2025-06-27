// ==========================================
//        Course Implementation
// ==========================================
class CourseQueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): CourseQueryBuilder {
    this.fields = fields;
    return this;
  }

  where(condition: string): CourseQueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  orderBy(
    field: string,
    direction: "ASC" | "DESC" = "ASC"
  ): CourseQueryBuilder {
    this.orderFields.push(`order by ${field} ${direction}`);
    return this;
  }

  limit(count: number): CourseQueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    const fields = this.fields.length > 0 ? this.fields.join(", ") : "*";

    const whereClause =
      this.conditions.length > 0
        ? `WHERE ${this.conditions.join(" AND ")}`
        : " ";

    const orderByClause =
      this.orderFields.length > 0
        ? `ORDER BY ${this.orderFields.join(", ")}`
        : "";

    const limitClause = this.limitCount ? `LIMIT ${this.limitCount}` : "";

    return `Select ${fields} from ${this.table} ${whereClause} ${orderByClause} ${limitClause}`;
  }
}
