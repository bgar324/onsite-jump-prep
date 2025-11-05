interface Core{
  id : number;
}

interface Book extends Core {
  title : string;
  author : string;
  pages : number;
}

interface Movie extends Core {
  title : string;
  rating : number;
  director : string;
}

class InventoryManager<T extends Core>{
  private inventory : T[] = []

  constructor(inventory : T[]){
    this.inventory = inventory
  } 

  add(item : T) : void {
    this.inventory.push(item)
  }

  getById(id : number) : T | undefined {
    return this.inventory.find((item) => item.id === id)
  }

  delete(id : number) : void {
    this.inventory = this.inventory.filter((item) => item.id !== id)
  }

  getAll() : T[] {
    return this.inventory
  }

  findBy<K extends keyof T>(key : K , value : T[K]) : T[] {
    let ans : T[] = []
    for (const v of this.inventory){
      if (v[key] === value){
        ans.push(v)
      }
    }
    return ans;
  }
}

type DeepUnwrap<T> = T extends Promise<infer U> ? DeepUnwrap<U> : T extends (infer U)[] ? DeepUnwrap<U> : T

const bookStore = new InventoryManager<Book>([])
const movieStore = new InventoryManager<Movie>([])