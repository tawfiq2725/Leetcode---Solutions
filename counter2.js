/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let start = init;
  return {
    increment: () => {
      start += 1;
      return start;
    },
    decrement: () => {
      start -= 1;
      return start;
    },
    reset: () => {
      start = init;
      return start;
    },
  };
};

/**
 * const counter = createCounter(5);
 * console.log(counter.increment()); // 6
 * console.log(counter.reset()); // 5
 * console.log(counter.decrement()); // 4
 */
