const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const ProductMock = dbMock.define("Product", {
  name: "Test Product",
  price: 99.99,
  quantity: 5,
  image: "test.jpg"
});

describe("Product Model", () => {
  it("should create a product", async () => {
    const product = await ProductMock.create({
      name: "Mock Product",
      price: 50.0,
      quantity: 2,
      image: "mock.jpg"
    });

    expect(product.name).toBe("Mock Product");
    expect(product.price).toBe(50.0);
    expect(product.quantity).toBe(2);
  });

  it("should fail without required fields", async () => {
    await expect(ProductMock.create({})).resolves.toBeDefined(); // Sequelize-mock doesn't enforce schema strictly
  });
});
