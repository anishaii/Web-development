const request = require("supertest");
const express = require("express");
const { authRouter } = require("../../routes/authRoutes"); // corrected path
jest.mock("../../model/userSchema"); // mock the Sequelize user model
const Users = require("../../model/userSchema"); // use the mock
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);

describe("Auth Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      Users.findOne.mockResolvedValue(null); 
      Users.create.mockResolvedValue({ userId: 1, email: "test@example.com" });

      const res = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Test User",
          email: "test@example.com",
          phone: "1234567890",
          gender: "female",
          password: "password123"
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe("User added successfully");
      expect(Users.findOne).toHaveBeenCalledWith({ where: { email: "test@example.com" } });
      expect(Users.create).toHaveBeenCalled();
    });

    it("should return 400 if user already exists", async () => {
      Users.findOne.mockResolvedValue({ userId: 1, email: "test@example.com" });

      const res = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Test User",
          email: "test@example.com",
          phone: "1234567890",
          gender: "female",
          password: "password123"
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe("User already exists");
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login successfully with correct credentials", async () => {
      const hashedPassword = await bcrypt.hash("password123", 10);
      const mockUser = {
        userId: 1,
        email: "test@example.com",
        password: hashedPassword,
        toJSON: () => ({ userId: 1, email: "test@example.com" }),
      };

      Users.findOne.mockResolvedValue(mockUser);

      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: "test@example.com",
          password: "password123",
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("data.access_token");
      expect(res.body.message).toBe("Successfully logged in");
    });

    it("should return 401 for invalid credentials", async () => {
      const hashedPassword = await bcrypt.hash("password123", 10);
      const mockUser = {
        userId: 1,
        email: "test@example.com",
        password: hashedPassword,
      };

      Users.findOne.mockResolvedValue(mockUser);

      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: "test@example.com",
          password: "wrongpassword",
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe("Invalid credentials.");
    });

    it("should return 400 if email or password missing", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "", password: "" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe("Email and password required.");
    });
  });
});
