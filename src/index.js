module.exports = function check(str, bracketsConfig) {
  let checkingStack = [];
  let sameBracketcheckingStack = [];
  for (i = 0; i < str.length; i++) {
    for (k = 0; k < bracketsConfig.length; k++) {
      if (str[i] === bracketsConfig[k][0]) {
        checkingStack.push(str[i]);
      } else if (str[i] === bracketsConfig[k][1]) {
        checkingStack.includes(bracketsConfig[k][0]) ? checkingStack.pop() : false
      }
    }
    
  }
  return (checkingStack.length % 2 === 0);
}