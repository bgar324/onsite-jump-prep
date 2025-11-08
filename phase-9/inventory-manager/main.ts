interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export class Inventory {
  // private array of product objects - 'inventory'. and a constructor
  private _inventory: Product[];
  constructor(_inventory: Product[]) {
    this._inventory = _inventory;
  }

  // add product
  // checking if the values are 'good' via ts
  // pushing that onto our array
  // returning the new product object

  addProduct(name: string, quantity: number, price: number): Product {
    const uuid = crypto.randomUUID();
    const product = {
      id: uuid,
      name: name,
      quantity: quantity,
      price: price,
    };
    this._inventory.push(product);
    return product;
  }

  // get product via .find()
  // branching so if its found then we return and else undefined

  getProduct(id: string): Product | undefined {
    return this._inventory.find((o) => o.id === id);
  }

  // update a stock
  // we would find then decrement
  updateStock(id: string, delta: number): boolean {
    // first finding the value.
    const val = this._inventory.find((o) => o.id === id);
    if (!val) {
      return false;
    } else {
      val.quantity += delta;
      return true;
    }
  }

  // deleting a product we would use a filter
  deleteProduct(id : string) : boolean {
    // first we want to find if that value exists
    const exists = this._inventory.some((o) => o.id === id);
    if(exists) {
      this._inventory = this._inventory.filter((o) => o.id !== id)
      return true;
    } else {
      // value doesnt exist so:
      return false;
    }
  }

  // total value we would do an iteration through the entire list
  totalValue() : number {
    const sum = this._inventory.reduce((acc, p) => 
      acc += p.quantity * p.price , 0
    )
    return sum;
  }

  // list products would functionally act as our getter.
  listProducts() : Product[] {
    return this._inventory
  }
}
