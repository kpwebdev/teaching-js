// name export starts
export function sum2(x, y) {
  return x + y;
}

export function sub2(x, y) {
  return x - y;
}

export function mul2(x, y) {
  return x * y;
}

export function div2(x, y) {
  return x / y;
}
// name export ends

// default export starts
function sum3(x, y) {
  return x + y;
}

function sub3(x, y) {
  return x - y;
}

function mul3(x, y) {
  return x * y;
}

function div3(x, y) {
  return x / y;
}

export default { sum3, sub3, mul3, div3 };
// default export ends

// more about Javascript Module system
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
