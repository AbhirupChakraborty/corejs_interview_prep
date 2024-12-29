// Theory reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
/* In-Short: 
    function + required data
    or
    function + lexical scope/environment
    or
    function + surronding state
*/
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
