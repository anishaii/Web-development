const Users = require("../model/userSchema");
const { sequelize } = require("../Database/db");

beforeAll(async () => {
  await sequelize.sync({ force: true });  // reset DB before tests
});

afterAll(async () => {
  await sequelize.close();  // close DB connection after tests
});

describe("User Model", () => {
  it("should have required fields", () => {
    expect(Users.rawAttributes).toHaveProperty("name");
    expect(Users.rawAttributes).toHaveProperty("email");
    expect(Users.rawAttributes).toHaveProperty("password");
    expect(Users.rawAttributes).toHaveProperty("phone");
    expect(Users.rawAttributes).toHaveProperty("gender");
  });

  it("should hash password before create", async () => {
    const testUser = Users.build({
      name: "Test User",
      email: "testuser@example.com",
      phone: "9876543210",
      gender: "female",
      password: "plaintext123"
    });

    await testUser.save();

    expect(testUser.password).not.toBe("plaintext123");
    expect(testUser.password).toMatch(/^\$2[aby]\$.{56}$/); // bcrypt hash format
  });
});
