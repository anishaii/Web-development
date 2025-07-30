// test/userController.test.js
const Users = require("../model/userSchema");
const { getAllEmployee, saveAllEmployee } = require("../controller/userController");

jest.mock("../model/userSchema");

describe("User Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    };
  });

  test("getAllEmployee should return users", async () => {
    const mockUsers = [{ name: "Alice" }, { name: "Bob" }];
    Users.findAll.mockResolvedValue(mockUsers);

    await getAllEmployee(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: mockUsers,
      message: "Successfully fetched data"
    });
  });

  test("saveAllEmployee should add user if not exists", async () => {
    req.body = {
      name: "Test",
      userId: 1,
      email: "test@example.com",
      phone: "123456789",
      password: "pass",
      gender: "other"
    };

    Users.findOne.mockResolvedValue(null);
    Users.create.mockResolvedValue(req.body);

    await saveAllEmployee(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "User added successfully" });
  });

  test("saveAllEmployee should not add if user exists", async () => {
    Users.findOne.mockResolvedValue({ userId: 1 });

    await saveAllEmployee(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "User already exists" });
  });
});
