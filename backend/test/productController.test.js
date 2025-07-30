const productController = require("../controller/productController");
const Product = require("../model/productSchema");

jest.mock("../model/productSchema", () => ({
  create: jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Product Controller", () => {
  it("should add a new product", async () => {
    const req = {
      body: { name: "Test", price: 100, quantity: 2 },
      file: { filename: "image.jpg" },
    };
    const res = mockResponse();
    Product.create.mockResolvedValue(req.body);

    await productController.addProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: "Product added successfully",
    }));
  });

  it("should get all products", async () => {
    const req = {};
    const res = mockResponse();
    Product.findAll.mockResolvedValue([{ id: 1, name: "Test" }]);

    await productController.getAllProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it("should update a product", async () => {
    const req = {
      params: { id: 1 },
      body: { name: "Updated", price: 150, quantity: 5 },
      file: null,
    };
    const res = mockResponse();
    const mockProduct = {
      image: "old.jpg",
      update: jest.fn(),
    };

    Product.findByPk.mockResolvedValue(mockProduct);
    await productController.updateProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: "Product updated successfully",
    }));
  });

  it("should delete a product", async () => {
    const req = { params: { id: 1 } };
    const res = mockResponse();
    Product.destroy.mockResolvedValue(1);

    await productController.deleteProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Product deleted successfully" });
  });
});
