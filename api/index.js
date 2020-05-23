const kirei = require("../src/kirei");

module.exports = (req, res) => {
  const { body } = req;
  const prettified = kirei.runPrettier(body.src, body.opts);

  res.json({
    src: prettified,
  });
};
