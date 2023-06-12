import { expect } from "chai";
import user from "../models/user.js";

describe("User API", () => {
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

      expect(response.status).to.equal(201);
      expect(responseData.data.email).to.equal(newUser.email);
    });
  });
});
