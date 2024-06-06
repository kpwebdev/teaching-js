// operator is used to perform certain operation and as a result they generates value

// Math operators
// + (plus)
console.log("5 + 5: ", 5 + 5);
// - (minus)
console.log("10 - 5: ", 10 - 5);
// * (multiply)
console.log("5 * 5: ", 5 * 5);
// / (divide)
console.log("5 / 5: ", 5 / 5);
// ** (exponent)
console.log("5 ** 5: ", 5 ** 5);
// % (modulus) => circular motion e.g. the clock
console.log("5 % 5: ", 5 % 5);

// ++ (increment by 1)
{
  let age = 24;
  age++; // first displays the variable value and then increments
  ++age; // first increments and then displays the variable value
}

// -- (decrement by 1)
{
  let age = 24;
  age--; // first displays the variable value and then increments
  --age; // first increments and then displays the variable value
}

// assignment operators
// =
{
  let age = 24;
  age = 26;
}
// +=
{
  let age = 24;
  age += 2; // age = age + 2
}
// -=
{
  let age = 24;
  age -= 2; // age = age - 2
}
// *=
{
  let age = 24;
  age *= 2; // age = age * 2
}
// /=
{
  let age = 24;
  age /= 2; // age = age / 2
}
// **=
{
  let age = 24;
  age **= 2; // age = age ** 2
}
// %=
{
  let age = 24;
  age %= 2; // age = age % 2
}

// comparison operators
// ==	(loosely equals to)
console.log("5 == '5'", 5 == "5");
// ===	(strictly equals to - it check for both the value and the type)
console.log("5 === '5'", 5 === "5");
// !=	(loosely not equals to )
console.log("5 != '5'", 5 != 5);
// !==	(strictly not equals to - it check for both the value and the type)
console.log("5 !== '5'", 5 == 5);
// >	(greater than)
console.log("5 > '5'", 5 > 5);
// <	(less than)
console.log("5 < '5'", 5 < 5);
// >=	(greater than or equals to)
console.log("5 >= '5'", 5 >= 5);
// <=	(less than or equals to)
console.log("5 <= '5'", 5 <= 5);
// ?	ternary operator
// LOGIC ? VALUE_IF_LOGIC_IS_TRUE : VALUE_IF_LOGIC_IS_NOT_TRUE
console.log(5 > 5 ? "Yes" : "No");

// logic operators => They are used to combine multiple comparison operators
// && (and) => all should be true in order to get true value
console.log("true && true", true && true);
// || (or) => any one should be true in order to get true value
console.log("true || false", false);
// ! (not) => negates the boolean in other words if something is true it will make it false and vice-versa
console.log("!true", !true);

// type operator => shows type
console.log("typeof 5", typeof 5);

// instance operator => to check if the particular is instance of the specified class
const currentTime = new Date();
console.log("currentTime instanceof Date", currentTime instanceof Date);

// New operators
// ?. => optional chaining
// ?? => nullish coalescing
// ||= => logical or assignment
// &&= => logical and assignment
// ??= => nullish coalescing assignment

// operator precedence which operation should perform first
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

// everything is truthy except the following false values
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// ecmascript/ES version
// https://github.com/sudheerj/ECMAScript-features

// !! double bang operator in JS
// https://dev.to/sanchithasr/what-is-the-double-bang-operator-in-javascript-4i3h
