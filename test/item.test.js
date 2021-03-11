const {Item} = require("../src/item");


describe("Item", function() {
  it("should display its name", function() {
    const item = new Item("a thing", 0,0)
    expect(item.name).toEqual("a thing");
    expect(item.sellIn).toEqual(0)
    expect(item.quality).toEqual(0)
  });
});
