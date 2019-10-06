"use strict";

module.exports = context => ({
  Identifier: node => {
    if (node.name === "hoge") {
      context.report({node, message: "You must not use hoge variable."})
    }
  }
});
