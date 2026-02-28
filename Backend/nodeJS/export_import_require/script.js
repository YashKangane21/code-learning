let value = module.require("./app.js");
console.log("Sum :", value.sum(4,2));
console.log("Diff :", value.diff(4,2));
console.log("Mult :", value.mult(4,2));
console.log("Div :", value.div(4,2));

let info = require("./fruits");
console.log(info[0].name);
console.log(info[0].color);

