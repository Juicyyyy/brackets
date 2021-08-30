const brackets = {
    [')']: '(',
    ['}']: '{',
    ['|']: '|',
};

module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
      let currentI = str[i];

      if(bracketsConfig.includes(currentI)) {
          stack.push(currentI);
      }
      else {
          if (stack.length === 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];

          if (bracketsConfig[currentI] === topElement) {
              stack.pop();
          }
          else {
              return false;
          }
      }
  }
  return stack.length === 0;
}
