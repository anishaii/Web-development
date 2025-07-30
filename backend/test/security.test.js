const request = require("supertest");
const app = require("../index");

describe("Security Tests", () => {
  it("should reject SQL Injection", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "' OR 1=1 --", price: 100, quantity: 2 });

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });

  it("should reject XSS attack", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "<script>alert('xss')</script>", price: 100, quantity: 2 });

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });

  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/api/unknown");
    expect(res.statusCode).toBe(404);
  });
});
