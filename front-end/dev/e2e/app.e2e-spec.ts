import { browser } from "protractor";

describe("e2e", () => {

  it("should works", () => {
    var project = "angular"
    expect(project).toEqual("angular");
  });

});
