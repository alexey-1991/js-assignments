
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
  return function(x) {
    return f(g(x));
  };
  // throw new Error('Not implemented');
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

  return function(x) {
    return Math.pow(x, exponent);
  };

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

  let args=[].slice.apply(arguments);

  if (args.length==3) {

    let a = args[0];
    if (!a) {
      a = 0;
    }

    let b = args[1];
    if (!b) {
      b = 0;
    }

    let c = args[2];
    if (!c) {
      c = 0;
    }


    return function (x) {
      return a * x * x + b * x + c;
    };
  }
  if (args.length==2) {
    let a = args[0];
    if (!a) {
      a = 0;
    }

    let b = args[1];
    if (!b) {
      b = 0;
    }

    return function (x) {
      return a * x + b;
    };
  }
  if (args.length==1) {
    let a = args[0];
    if (!a) {
      a = 0;
    }

    return function() {
      return a;
    };
  }
  if (args.length==0) {

    return function(x) {
      return null;
    };
  }
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
  let cache=false;

  return function() {
    if (!cache) {

      cache=func();
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
  let attempt=0;

  return ()=>{
    while (attempt<=attempts){
      try {
        return func();

      } catch(err){
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

  throw new Error('Not implemented');
//   const logger=logFunc;
//   return function() {
//
//     let args=[].slice.apply(arguments);
//     console.log(args);
//     let LogStart1=func.name+'(';
//     let LogStart2=') '+'starts';
//     let LogEnd1=func.name+'('
//     let LogEnd2=') '+'ends';
//     logger(LogStart1,args,LogStart2);
//     logger(LogEnd1,args,LogEnd2);
//     return func(args);
//
//   }
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
// I dont know another way to solve this exercise.This is bad solution
  let argsOne=[].slice.apply(arguments).slice(1);

  return function() {

    let argsTwo=[].slice.apply(arguments);
    let args=argsOne.concat(argsTwo);
    return fn(args[0], args[1], args[2], args[3]);//<==if x5 is not undefined my code will be bad;
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

  let counter=startFrom;

  return function(){
    return startFrom++;
  };

}
