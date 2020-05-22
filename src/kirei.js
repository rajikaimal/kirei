const prettier = require("prettier");

const runPrettier = (src, opts) => {
  const prettified = prettier.format(src, opts);
  return prettified;
};

module.exports = {
  runPrettier,
};
