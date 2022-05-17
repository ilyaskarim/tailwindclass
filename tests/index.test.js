const tailwindclass = require("./../lib/index").default;

test("Expect function works", () => {
  expect(
    tailwindclass({
      hover: ["text-red"],
    })
  ).toBe("hover:text-red");

  expect(
    tailwindclass({
      default: "green blue",
      hover: ["text-red"],
    })
  ).toBe("green blue hover:text-red");
});
