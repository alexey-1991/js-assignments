
/** ********************************************************************************************
 *                                                                                            *
 * Plese read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions                    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures                           *
 *                                                                                            *
 ********************************************************************************************* */


/**
 * Returns the functions composition of two specified functions f(x) and g(x).
 * The result of compose is to be a function of one argument, (lets call the argument x),
 * which works like applying function f to the result of applying function g to x, i.e.
 *  getComposition(f,g)(x) = f(g(x))
 *
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 *
 * @example
 *   getComposition(Math.sin, Math.asin)(x) => Math.sin(Math.acos(x))
 *
 */
export function getComposition(f, g) {
  return x => f(g(x));
}


/**
 * Returns the math power function with the specified exponent
 *
 * @param {number} exponent
 * @return {Function}
 *
 * @example
 *   var power2 = getPowerFunction(2); // => x^2
 *   power2(2) => 4
 *   power2(4) => 16
 *
 *   var power05 = getPowerFunction(0.5); // => x^0.5
 *   power05(4) => 2
 *   power05(16) => 4
 *
 */
export function getPowerFunction(exponent) {
  return x => Math.pow(x, exponent);
}


/**
 * Returns the polynom function of one argument based on specified coefficients.
 * See: https://en.wikipedia.org/wiki/Polynomial#Definition
 *
 * @params {integer}
 * @return {Function}
 *
 * @example
 *   getPolynom(2,3,5) => y = 2*x^2 + 3*x + 5
 *   getPolynom(1,-3)  => y = x - 3
 *   getPolynom(8)     => y = 8
 *   getPolynom()      => null
 */
export function getPolynom() {

  const args = [].slice.apply(arguments);

  switch (args.length) {
  case 3:{
    const a = args[0] || 0;
    const b = args[1] || 0;
    const c = args[2] || 0;
    return x => a * x * x + b * x + c;
  }
  case 2:{
    const d = args[0] || 0;
    const e = args[1] || 0;
    return x => d * x + e;
  }
  case 1:{
    const g = args[0] || 0;
    return () => g;
  }
  default:{
    return null;
  }}
}

/**
 * Memoizes passed function and returns function
 * which invoked first time calls the passed function and then always returns cached result.
 *
 * @params {Function} func - function to memoize
 * @return {Function} memoized function
 *
 * @example
 *   var memoizer = memoize(() => Math.random());
 *   memoizer() => some random number  (first run, evaluates the result of Math.random())
 *   memoizer() => the same random number  (second run, returns the previous cached result)
 *   ...
 *   memoizer() => the same random number  (next run, returns the previous cached result)
 */
export function memoize(func) {
  let cache = false;

  return function () {
    if (!cache) {
      cache = func();
      return cache;
    }
    return cache;
  };
}


/**
 * Returns the function trying to call the passed function and if it throws,
 * retrying it specified number of attempts.
 *
 * @param {Function} func
 * @param {number} attempts
 * @return {Function}
 *
 * @example
 * var attempt = 0, retryer = retry(() => {
 *      if (++attempt % 2) throw new Error('test');
 *      else return attempt;
 * }, 2);
 * retryer() => 2
 */
export function retry(func, attempts) {
  let attempt = 0;

  return () => {
    while (attempt <= attempts) {
      try {
        return func();

      } catch (err) {
        attempt++;
      }
    }
  };
}


/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 * The fromat of output log is:
 * <function name>(<arg1>, <arg2>,...,<argN>) starts
 * <function name>(<arg1>, <arg2>,...,<argN>) ends
 *
 *
 * @param {Function} func
 * @param {Function} logFunc - function to output log with single string argument
 * @return {Function}
 *
 * @example
 *
 * var cosLogger = logger(Math.cos, console.log);
 * var result = cosLogger(Math.PI));     // -1
 *
 * log from console.log:
 * cos(3.141592653589793) starts
 * cos(3.141592653589793) ends
 *
 */
export function logger(func, logFunc) {
  const functionName = func.name;

  return function () {
    const args = [].slice.call(arguments);
    const argsString = getRightString(args);

    logFunc(`${functionName}(${argsString}) starts`);

    return (() => {
      const result = func.apply(this, args);
      return (() => {
        logFunc(`${functionName}(${argsString}) ends`);
        return result;
      })();
    })();
  };
}

function getRightString(args) {
  return args.reduce((acc, curr) => {

    if (curr.reduce) {
      curr = curr.map(elem => {
        if ((typeof elem) === 'string') {
          return `"${elem}"`;
        }
        if ((typeof elem) === 'number') {
          return `${elem}`;
        }
      }).join(',');
      curr = `[${curr}]`;
    }

    if ((typeof curr) === 'number') {
      curr = `${curr}`;
    }

    if (acc !== '') {
      curr = `,${curr}`;
    }

    return acc + curr;
  }, '');
}

/**
 * Return the function with partial applied arguments
 *
 * @param {Function} fn
 * @return {Function}
 *
 * @example
 *   var fn = function(x1,x2,x3,x4) { return  x1 + x2 + x3 + x4; };
 *   partialUsingArguments(fn, 'a')('b','c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b')('c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c')('d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c','d')() => 'abcd'
 */
export function partialUsingArguments(fn) {
  const args1 = [].slice.apply(arguments);
  const func = args1[0];
  const argsInit = args1.slice(1, args1.length);

  return function () {
    const argsEnd = [].slice.apply(arguments);
    const allArgs = argsInit.concat(argsEnd);

    return func.apply(this, allArgs);
  };

}

/**
 * Returns the id generator function that returns next integer starting from specified
 * number every time when invoking.
 *
 * @param {Number} startFrom
 * @return {Function}
 *
 * @example
 *   var getId4 = getIdGenerator(4);
 *   var getId10 = gerIdGenerator(10);
 *   getId4() => 4
 *   getId10() => 10
 *   getId4() => 5
 *   getId4() => 6
 *   getId4() => 7
 *   getId10() => 11
 */
export function getIdGeneratorFunction(startFrom) {
  return () => startFrom++;
}
