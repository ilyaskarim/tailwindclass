const tailwindclass = require("./../lib/tailwindclass").default;

test("Expect passing nothing doesn't shows error", () => {
  expect(tailwindclass()).toBe("");
});

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

  expect(
    tailwindclass({
      _2xl: ["text-red"],
    })
  ).toBe("2xl:text-red");


  expect(
    tailwindclass({
      _hover: ["text-red"],
    })
  ).toBe("hover:text-red");
});
