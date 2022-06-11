const getShortBranchName = (branch) => {
  const featurePrefix = "feature/";
  const baseName = branch.startsWith(featurePrefix)
    ? branch.replace(featurePrefix, "")
    : branch;
};

const getNewVersion = (branch, oldVersion) => {
  const semantic = oldVersion.join(".");
};
exports.getNewVersion = getNewVersion;
