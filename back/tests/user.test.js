import chai from "chai";
const { expect: chaiExcept } = chai;
import user from "../models/user.js";

describe("User API", () => {
  beforeEach(() => {
    user.deleteMany({});
  });
  describe("AUTH", () => {
    it("User can create an account", async () => {
      const newUser = {
        pseudo: "TestMan",
        email: "test@email.com",
        password: "test",
      };

      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      };

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        opts
      );
      const responseData = await response.json();

      chaiExcept(response.status).to.equal(201);
      chaiExcept(responseData.data.email).to.equal(newUser.email);
    });
    it("User can login to his account", async () => {
      const loginUser = {
        pseudo: "TestMan",
        email: "test@email.com",
        password: "test",
      };

      const loginOpts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      };

      const loginRes = await fetch(
        "http://localhost:5000/api/auth/login",
        loginOpts
      );

      const loginData = await loginRes.json();

      chaiExcept(loginRes.status).to.equal(200);
      chaiExcept(loginData.user.pseudo).to.equal(loginUser.pseudo);
    });
  });
});
