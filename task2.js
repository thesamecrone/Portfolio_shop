module.exports = function calculator() {
    let value = 0;
  
    const add = (num) => { value += num; };
    const subtract = (num) => { value -= num; };
    const multiply = (num) => { value *= num; };
    const divide = (num) => { 
      if (num === 0) {
        throw new Error('Cannot divide by zero.');
      } else {
        value /= num; 
      }
    };
  
    const magic = (fn) => {
      return function recursive(arg) {
        fn(arg);
        return function(nextArg) {
          if (nextArg !== undefined) {
            return recursive(nextArg);
          }
        };
      };
    };
  
    return {
      add,
      subtract,
      multiply,
      divide: (num) => {
        try {
          divide(num);
        } catch (e) {
          if (e.message !== 'Cannot divide by zero.') {
            throw e;
          }
        }
      },
      magic: (fn) => magic((num) => {
        try {
          fn(num);
        } catch (e) {
          if (e.message !== 'Cannot divide by zero.') {
            throw e;
          }
        }
      }),
      getValue: () => value,
    };
  };
  

  module.exports = function calculator() {
    let value = 0;
  
    function add(num) {
      value += num;
    }
  
    function subtract(num) {
      value -= num;
    }
  
    function multiply(num) {
      value *= num;
    }
  
    function divide(num) {
      if (num === 0) {
        throw new Error('Cannot divide by zero.');
      }
      value /= num;
    }
  
    function magic(fn) {
      return function curried(arg) {
        fn(arg);
        return function next(arg2) {
          if (arg2 === undefined) return;
          return curried(arg2);
        };
      };
    }
  
    return {
      add(num) {
        add(num);
      },
  
      subtract(num) {
        subtract(num);
      },
  
      multiply(num) {
        multiply(num);
      },
  
      divide(num) {
        try {
          divide(num);
        } catch (e) {
          if (e.message !== 'Cannot divide by zero.') {
            throw e;
          }
        }
      },
  
      magic(fn) {
        return magic(fn);
      },
  
      getValue() {
        return value;
      }
    };
  };
  