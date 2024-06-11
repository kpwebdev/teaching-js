// name import
import {
  sum2,
  sub2,
  mul2,
  div2,
} from "./6.3-after-module-utility-functions.js";
// import alias
import {
  sum2 as sumFunc,
  sub2 as subFunc,
  mul2 as mulFunc,
  div2 as divFunc,
} from "./6.3-after-module-utility-functions.js";
// import all name exports and add them into a single variable
import * as mathFunctions2 from "./6.3-after-module-utility-functions.js";

// default import
import mathFunctions from "./6.3-after-module-utility-functions.js";

console.log("sum2(x, y):", sum2(x, y));
console.log("sub2(x, y):", sub2(x, y));
console.log("mul2(x, y):", mul2(x, y));
console.log("div2(x, y):", div2(x, y));

console.log("mathFunctions.sum3(x, y):", mathFunctions.sum3(x, y));
console.log("mathFunctions.sub3(x, y):", mathFunctions.sub3(x, y));
console.log("mathFunctions.mul3(x, y):", mathFunctions.mul3(x, y));
console.log("mathFunctions.div3(x, y):", mathFunctions.div3(x, y));

console.log("mathFunctions2.sum2(x, y):", mathFunctions2.sum2(x, y));
console.log("mathFunctions2.sub2(x, y):", mathFunctions2.sub2(x, y));
console.log("mathFunctions2.mul2(x, y):", mathFunctions2.mul2(x, y));
console.log("mathFunctions2.div2(x, y):", mathFunctions2.div2(x, y));

console.log("sumFunc(x, y):", sumFunc(x, y));
console.log("subFunc(x, y):", subFunc(x, y));
console.log("mulFunc(x, y):", mulFunc(x, y));
console.log("divFunc(x, y):", divFunc(x, y));

// Assignment
// write different functions and variables in one file for example file1.js (name export and default export)
// consume the functions and variables declared in the previous file in another file for example file2.js (name import, name aliased import, default import, import *)
