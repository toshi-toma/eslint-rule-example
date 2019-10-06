"use strict";

const rule = require("../rules/taboo-vars");

const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "var fuga = 'fuga';"
  }
];

const invalid = [
  {
    code: "var fuga = 'fuga';",
    options: [["fuga"]],
    errors: [{ message: "You must not use taboo variable.", type: "Identifier" }]
  }
];

ruleTester.run("taboo-vars", rule, { valid, invalid });
