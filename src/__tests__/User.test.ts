import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  // beforeEach(async () => {

  // })

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(201);
  });

  it("shoul be return 400 if user alredy exists", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(400);
  });
});
