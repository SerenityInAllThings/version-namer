const { describe } = require("yargs");
const { getNewVersion } = require("./versioner");

describe("getNewVersion", () => {
  describe("feature branches", () => {
    it("should get new version for regular feature branch", () => {
      const version = [1, 0, 0];
      const branch = "feature/my-first-feature";
      const expectedVersion = "1.0.0-my-fir-fea";
      const newVersion = getNewVersion(branch);
    });
  });
});
