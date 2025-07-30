const request = require("supertest");
const app = require("../index");
const path = require("path"); 


describe("Product API Endpoints", () => {
  let productId;

  it("should create a product", async () => {
    const res = await request(app)
      .post("/api/products")
      .field("name", "Test Product")
      .field("price", "100")
      .field("quantity", "2")
      .attach("image", path.join(__dirname, "mock", "test.png"));
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("data");
    productId = res.body.data.id;
  });

  it("should get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update a product", async () => {
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({ name: "Updated Product", price: 120, quantity: 3 });

    expect(res.statusCode).toBe(200);
  });

  it("should delete a product", async () => {
    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.statusCode).toBe(200);
  });
});
