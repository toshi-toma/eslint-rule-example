"use strict";

const rule = require("../rules/no-hoge");

const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "var fuga = 'fuga';"
  }
];

const invalid = [
  {
    code: "var hoge = 'hoge';",
    errors: [{ message: "You must not use hoge variable.", type: "Identifier" }]
  }
];

ruleTester.run("no-hoge", rule, { valid, invalid });
