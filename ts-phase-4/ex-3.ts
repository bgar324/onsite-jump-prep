interface Order {
  id: number;
  customer: string;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
}

interface Repository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | undefined>;
  create(item: T): Promise<void>;
  update(id: number, updates: Partial<T>): Promise<void>;
  delete(id: number): Promise<void>;
}

class InMemoryOrderRepository implements Repository<Order> {
  private orders: Order[] = [];

  async getAll(): Promise<Order[]> {
    return this.orders;
  }

  async getById(id: number): Promise<Order | undefined> {
    return this.orders.find((o) => o.id === id);
  }

  async create(order: Order): Promise<void> {
    const exists = this.orders.some((n) => n.id === order.id);
    if (exists) {
      throw new Error(`Order with id ${order.id} already exists`);
    }
    this.orders.push(order);
  }

  async update(id: number, updates: Partial<Order>): Promise<void> {
    const index = this.orders.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new Error(`Order with id ${id} not found.`);
    }
    this.orders[index] = {
      ...this.orders[index],
      ...updates,
    };
  }

  async delete(id: number): Promise<void> {
    const index = this.orders.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new Error(`Order with id ${id} not found.`);
    }
    this.orders.splice(index, 1)
  }

  async findByStatus(status : Order["status"]) : Promise<Order[]> {
    return this.orders.filter(n => n.status === status);
  }

  async findRecent(days : number) : Promise<Order[]> {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return this.orders.filter(n => n.createdAt >= cutoff)
  }
}
