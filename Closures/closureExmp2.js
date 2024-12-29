function outerFunction() {
  let name = "Outer";
  function innerFunction() {
    console.log(name);
  }
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: Outer
