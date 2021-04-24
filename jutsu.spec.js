const { deepStrictEqual } = require("assert");
const { show } = require("./jutsu");

describe("Jutsu tests", () => {
  it("Have the correct size", () => {
    const result = show("Luanna");

    deepStrictEqual(result, true);
  });

  it("Do not have the correct size", () => {
    const result = show("Luan");

    deepStrictEqual(result, false);
  });
});


