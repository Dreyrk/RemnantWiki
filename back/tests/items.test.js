import chai from "chai";
import { describe } from "mocha";
const { expect: chaiExcept } = chai;

describe("Items GET controllers", () => {
  it("GET weapons", async () => {
    const response = await fetch("http://localhost:5000/api/items/weapons");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
  it("GET armors", async () => {
    const response = await fetch("http://localhost:5000/api/items/armors");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
  it("GET amulets", async () => {
    const response = await fetch("http://localhost:5000/api/items/amulets");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
  it("GET rings", async () => {
    const response = await fetch("http://localhost:5000/api/items/rings");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
  it("GET traits", async () => {
    const response = await fetch("http://localhost:5000/api/items/traits");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
  it("GET mods", async () => {
    const response = await fetch("http://localhost:5000/api/items/mods");
    const responseData = await response.json();

    chaiExcept(response.status).to.equal(200);
    chaiExcept(responseData.data.length).to.be.greaterThanOrEqual(2);
  });
});
