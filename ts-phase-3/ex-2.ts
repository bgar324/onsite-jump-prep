interface Item {
  id: number;
}

class Collections<T extends Item> {
  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  add(item: T): void {
    let newList = [...this.items, item];
    this.items = newList;
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }
}

type Book = { id: number; title: string };

type Movie = { id: number; title: string; rating: number };

const bookCollection = new Collections<Book>([
  { id: 1, title: "1984" },
  { id: 2, title: "Brave New World" },
]);

const movieCollection = new Collections<Movie>([
  { id: 10, title: "Inception", rating: 9.0 },
]);

bookCollection.add({ id: 3, title: "Fahrenheit 451" });

console.log(bookCollection.getById(2));
// { id: 2, title: 'Brave New World' }

console.log(movieCollection.getAll());
// [ { id: 10, title: 'Inception', rating: 9 } ]
