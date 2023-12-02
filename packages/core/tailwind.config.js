const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  ...sharedConfig,
  important: ".novel-editor",
  prefix: "novel-",
};
