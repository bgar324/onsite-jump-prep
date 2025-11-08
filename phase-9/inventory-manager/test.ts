import { Inventory } from "./main";

test("computes total value correctly", () => {
  const inv = new Inventory([]);
  inv.addProduct("apple", 10, 1.5);
  inv.addProduct("banana", 5, 2);
  expect(inv.totalValue()).toBe(10 * 1.5 + 5 * 2);
});
