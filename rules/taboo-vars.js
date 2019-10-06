"use strict";

const rule = context => {
  let vars = [];

  if (Array.isArray(context.options[0])) {
    vars = context.options[0];
  }

  return {
    Identifier: node => {
      if (vars.includes(node.name)) {
        context.report({ node, message: "You must not use taboo variable." });
      }
    }
  };
};

rule.schema = [
  {
    type: "array",
    items: { type: "string" },
    uniqueItems: true
  }
];

module.exports = rule;
