import { Stock } from "./main";

describe("Stock", () => {
  test("update price directly", () => {
    // arrange
    const s = new Stock("AAPL", 100)

    // act
    s.updatePrice(105);

    // assert
    expect(s.price).toBe(105);
  })
})